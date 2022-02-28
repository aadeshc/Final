import * as React from 'react';
import $ from 'jquery'
import { Helper } from './helper'
import { CompactPeoplePicker, IPersonaProps, IBasePickerSuggestionsProps, ValidationState } from 'office-ui-fabric-react';
import { resolve } from 'path';
declare var _spPageContextInfo, jQuery, _spFormDigestRefreshInterval, UpdateFormDigest: any;

export interface ISPPeoplePickerProps {
    defaultValues?: IPersonaProps[];
    pickerEnabled?: boolean;
    multi?: boolean;
    onChange?(people: IPersonaProps[]): void;
}

export class SPPeoplePicker extends React.Component<ISPPeoplePickerProps, any> {
    constructor(props: ISPPeoplePickerProps) {
        super(props);

        //Initialize the state with Default Values
        this._onFilterChanged = this._onFilterChanged.bind(this);
        this._onStateChange = this._onStateChange.bind(this);
    }

    public render(): React.ReactElement<null> {
        const suggestionProps: IBasePickerSuggestionsProps = {
            noResultsFoundText: 'No results found',
            loadingText: 'Loading',
            showRemoveButtons: true,
        };

        return (
            <div>
                <CompactPeoplePicker onResolveSuggestions={this._onFilterChanged} itemLimit={this.props.multi ? 100 : 1}
                    onChange={this._onStateChange}
                    className={this.props.pickerEnabled ? 'ms-PeoplePicker' : 'disable-PeoplePicker'} disabled={!this.props.pickerEnabled}
                    pickerSuggestionsProps={suggestionProps} removeButtonAriaLabel=""
                    selectedItems={this.props.defaultValues}
                    onValidateInput={this._validateInput} />
            </div>
        );
    }

    private _onFilterChanged(filterText: string, currentPersonas: IPersonaProps[], limitResults?: number) {

        //Limit the number of input characters to entered at least 3
        if (filterText && filterText.length >= 3) {
            return this._getResultsAsPromise(filterText);
        }
        else
            return [];

    }

    private _onStateChange(currentPersonas: any[]) {
        let s: any = {};

        if (this.props.onChange) {

            if (currentPersonas.length > 0 && currentPersonas[currentPersonas.length - 1].imageInitials === "!") {
                currentPersonas.pop();
            }
            for (let i = 0; i < currentPersonas.length; i++) {
                this.ensureUser(_spPageContextInfo.siteServerRelativeUrl, currentPersonas.length !== 0 ? currentPersonas[i].email : "").then((data) => {
                    this.GetId(currentPersonas[i].email).then((data) => {
                        s.id = data
                        Object.assign(currentPersonas[i], s)
                    }).then(() => this.props.onChange(currentPersonas));
                })
            }
        }
    }
    private GetId(email: any): PromiseLike<any> {
        // Return a promise
        return new Promise((resolve, reject) => {
            const restUrl = _spPageContextInfo.siteServerRelativeUrl + `/_api/web/siteusers?$filter=UserPrincipalName eq '${email.substring(email.lastIndexOf('|') + 1)}'`;
            Helper.executeJson(restUrl, "GET", null, null)
                .then((response) => {
                    // Resolve the request
                    resolve(response.d.results[0].Id)
                })
        }).catch((e) => {
            resolve(null);
        });

    }

    private ensureUser(webUrl, loginName): Promise<any> {
        return new Promise((resolve, reject) => {
            UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval);
            let url = webUrl + "/_api/web/ensureuser"
            var payload = { 'logonName': loginName };
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json;odata=minimalmetadata',
                    'Content-Type': 'application/json;odata=minimalmetadata',
                    'Cache': 'no-cache',
                    'X-RequestDigest': jQuery('#__REQUESTDIGEST').val()
                },
                body: JSON.stringify(payload),
                credentials: 'include'
            }).then((res) => {
                res.json()

            }).then(() => {
                resolve()
            })
        }).catch(() => {
            return ([]);
        })
    }


    private _getResultsAsPromise(filterText: string): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => {

            //This is essential to always referesh form digest value for any SP REST post request 
            UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval);

            //http://sharepointfieldnotes.blogspot.com/2014/06/sharepoint-2013-clientpeoplepicker.html
            let url = `${_spPageContextInfo.siteServerRelativeUrl}/_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser`;
            var query = {
                'queryParams': {
                    'QueryString': filterText, 'MaximumEntitySuggestions': 30, 'AllowEmailAddresses': false,
                    'AllowOnlyEmailAddresses': false, 'PrincipalType': 15, 'PrincipalSource': 15
                }
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json;odata=minimalmetadata',
                    'Content-Type': 'application/json;odata=minimalmetadata',
                    'Cache': 'no-cache',
                    'X-RequestDigest': jQuery('#__REQUESTDIGEST').val()
                },
                credentials: 'include',
                body: JSON.stringify(query)
            }).then((res) => {
                return res.json();
            }).then((suggestions: any) => {

                let people: any[] = JSON.parse(suggestions.value);
                let personas: IPersonaProps[] = [];
                for (var i = 0; i < people.length; i++) {
                    var p = people[i];
                    let s: any = {};

                    s.text = p.DisplayText;
                    s.email = p.Key
                    personas.push(s);
                }
                return resolve(personas);
            })


        }).catch(() => {
            return ([]);
        })

    }

    private _validateInput = (input: string): ValidationState => {
        if (input.indexOf('@') !== -1) {
            return ValidationState.valid;
        } else if (input.length > 1) {
            return ValidationState.warning;
        } else {
            return ValidationState.invalid;
        }
    };
}