import { useState ,useEffect } from 'react';
const ThankYouPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust the timeout duration as needed

        return () => clearTimeout(timer);
    }, []);
    

    return (
        <div className="thank-you-popup z-50">
            
             {isLoading ? (
                <img src='/loading.gif'/>
                ) : (
      
            <div className="popup-content relative flex flex-col items-center ">
            <button className="absolute left-2 top-2 bg-red-300 px-2 text-white" onClick={onClose}>X</button>
                <h2 className="font-bold">Thanks again! You&apos;re awesome!</h2>
                <img src="/thankyou.gif"/>
                <p className="opacity-50 p-4">Thank you again for your interest in the Social Insure Platform! 
                As soon as the web and mobile app is out of beta with the early adopters and ready for the official launch, you will be notified by email.</p>
                
            </div>
            )}
            <style jsx>{`
                .thank-you-popup {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: opacity 0.5s;
                    opacity: ${isOpen ? '1' : '0'};
                    visibility: ${isOpen ? 'visible' : 'hidden'};
                }
                .popup-content {
                    width:50%;
                    background: white;
                    padding: 20px;
                    border-radius: 5px;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .popup-content {
                      width: 90%;
                    }
                }                  
            `}</style>
            
        </div>
    );
};

export default ThankYouPopup;
