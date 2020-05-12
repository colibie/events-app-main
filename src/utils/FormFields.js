export default {
    login: [
        { name: "email", type:"email", placeholder: "Enter your email address", label: "Email Address", autocomplete: "on" },
        { name: "password", type:"password", placeholder: "Enter your password", label: "Password", autocomplete: "on" },
    ],
    register: [
        { name: "firstname", type:"text", placeholder: "Enter your firstname", label: "First Name" },
        { name: "lastname", type:"text", placeholder: "Enter your lastname", label: "Last Name" },
        { name: "email", type:"email", placeholder: "Enter valid email Address", label: "Email Address" },
        { name: "contact", type:"tel", placeholder: "Enter your phone number", label: "Phone Number" },
        { name: "password", type:"password", placeholder: "Enter a secure password", label: "Password" },
        { name: "confirmPassword", type:"password", placeholder: "Confirm Password", label: "Confirm Password" }
    ],
    recovery: [{ name: "email", type:"email", placeholder: "Account email address", label: "Email Address" }],
    passReset : [
        { name: "password", type:"password", placeholder: "Enter a new password", label: "Password" },
        { name: "confirmPassword", type:"password", placeholder: "Confirm Password", label: "Confirm Password" },
    ],
    addBank: [
        { name: "accountName", type: "text", placeholder: "Account Name", label: "Account Name" },
        { name: "accountNumber", type: "number", placeholder: "Account Number", label: "Account Number" },
        { name: "bank", type: "select", placeholder: "Select your Bank"}
    ],
    payout: [{ name:"amount" , type:"number", placeholder:"How much do you want to withdraw?", label: "How much do you want to withdraw?" }],
    airtime: [{
        name: "amount",
        type: "number",
        placeholder: "Enter amount",
        label: "Amount",
    }, {
        name: "phone",
        type: "tel",
        placeholder: "Enter your mobile number e.g +2348100000000",
        label: "Mobile number"
    }],
    countries: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"],
    avatars: [
        { name: "elliot", src: "./img/user_avis/elliot.jpg" },
        { name: "eve", src: "./img/user_avis/eve.png" },
        { name: "helen", src: "./img/user_avis/helen.jpg" },
        { name: "jenny", src: "./img/user_avis/jenny.jpg" },
        { name: "mark", src: "./img/user_avis/mark.png" },
        { name: "matthew", src: "./img/user_avis/matthew.png" },
        { name: "molly", src: "./img/user_avis/molly.png" },
        { name: "nan", src: "./img/user_avis/nan.jpg" },
        { name: "patrick", src: "./img/user_avis/patrick.png" },
        { name: "rachel", src: "./img/user_avis/rachel.png" },
        { name: "steve", src: "./img/user_avis/steve.jpg" },
        { name: "stevie", src: "./img/user_avis/stevie.jpg" },
        { name: "test_dp", src: "./img/user_avis/test_dp.png" },
    ],
    changePassword: [
        { name: "oldPassword", type:"password", placeholder: "Enter your password", label: "Your Password" },
        { name: "password", type:"password", placeholder: "Enter a new password", label: "New Password" },
        { name: "confirmPassword", type:"password", placeholder: "Confirm Password", label: "Confirm Password" },
    ]
};