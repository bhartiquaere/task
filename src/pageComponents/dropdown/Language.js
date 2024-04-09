import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

const LanguageDropdown = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((dropdown) => !dropdown);
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          
            const data = [
                { id: 1, name: 'English', flag: 'us.png' },
                { id: 2, name: 'French', flag: 'fr.png' },
                { id: 3, name: 'Spanish', flag: 'es.png' },
                { id: 4, name: 'German', flag: 'de.png' }
            ];
      setLanguages(data);
        };

        fetchData();
    }, []);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setOpen(false);
    };

    return (
        <>
          <Dropdown 
             tag="li"
           toggle={toggle}
           isOpen={open}
          className="nav-item dropdown has-arrow flag-nav">
            <DropdownToggle 
            onClick={(e) => e.preventDefault()}
            className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                <img src="assets/img/flags/us.png" alt="Flag" height="20" />
                 <span >
                    {selectedLanguage ? selectedLanguage.name : 'English'}
                 </span>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu dropdown-menu-right">
              {languages.map(language => (
                    <a key={language.id} href="#" className="dropdown-item" 
                    onClick={() => handleLanguageSelect(language)}>
                        <img src={`assets/img/flags/${language.flag}`} alt="Flag" height="16" /> {language.name}
                    </a>
                ))}
            </DropdownMenu>
        </Dropdown>
        </>
    );
};

export default LanguageDropdown;
