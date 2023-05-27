
declare namespace AwesomePhonenumber
{
	type PhoneNumberFormat =
		'e164' |
		'international' |
		'national' |
		'rfc3966' |
		'significant';

	type PhoneNumberTypes =
		'fixed-line' |
		'fixed-line-or-mobile' |
		'mobile' |
		'pager' |
		'personal-number' |
		'premium-rate' |
		'shared-cost' |
		'toll-free' |
		'uan' |
		'voip' |
		'unknown';


	class PhoneNumber
	{
		constructor( phoneNumber: string, countryCode?: string );

		isValid( ): boolean;
		canBeInternationallyDialled( ): boolean;
		isPossible( ): boolean;
		getType( ): PhoneNumberTypes;
		isMobile( ): boolean;
		isFixedLine( ): boolean;
		getNumber( type?: PhoneNumberFormat ): string;
		getNumberFrom( regionCode: string ): string;
		getRegionCode( ): string;
		getCountryCode( ): number;
		toJSON( ): any;

		static getCountryCodeForRegionCode( regionCode: string ): number;
		static getRegionCodeForCountryCode( countryCode: number ): string;
		static getSupportedCallingCodes( ): string[ ];
		static getSupportedRegionCodes( ): string[ ];
		static getExample( regionCode: string, type?: PhoneNumberTypes ): PhoneNumber;
		static getAsYouType( regionCode: string ): AsYouType;
	}

	function PhoneNumber( phoneNumber: string, countryCode?: string ): PhoneNumber;

	class AsYouType
	{
		addChar( char: string ): string;
		number( ): string;
		removeChar( ): string;
		reset( number?: string ): string;
		getPhoneNumber( ): PhoneNumber;
	}
}

export default AwesomePhonenumber.PhoneNumber;
