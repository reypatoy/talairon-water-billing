import { useState } from "react";

function Profile() {

    const [email, setEmail] = useState('Leah.Amor@gmail.com');
    const [number, setNumber] = useState('09546432165')

    return (
        <>
            <div className="userProfileContainer">
                <div className="userProfileHeader">
                    <div className="userProfileIcon">
                        <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.4961 35.3176C47.6708 32.7941 49.988 29.3336 51.1254 25.4175C52.2628 21.5014 52.1638 17.3245 50.8422 13.4679C49.5206 9.61136 47.0421 6.26684 43.7516 3.8997C40.461 1.53255 36.522 0.260494 32.4825 0.260494C28.4431 0.260494 24.5041 1.53255 21.2135 3.8997C17.923 6.26684 15.4445 9.61136 14.1229 13.4679C12.8013 17.3245 12.7023 21.5014 13.8397 25.4175C14.9771 29.3336 17.2943 32.7941 20.469 35.3176C15.0291 37.5196 10.2827 41.1717 6.7356 45.8847C3.18854 50.5977 0.973854 56.1949 0.327638 62.0796C0.280861 62.5092 0.3183 62.944 0.437817 63.359C0.557334 63.774 0.756588 64.1612 1.0242 64.4984C1.56467 65.1794 2.35079 65.6156 3.2096 65.7111C4.06841 65.8065 4.92958 65.5534 5.60365 65.0073C6.27772 64.4613 6.70948 63.667 6.80395 62.7993C7.515 56.4039 10.5333 50.4974 15.2822 46.2082C20.031 41.919 26.1775 39.548 32.5473 39.548C38.9171 39.548 45.0636 41.919 49.8125 46.2082C54.5613 50.4974 57.5796 56.4039 58.2907 62.7993C58.3787 63.6032 58.7584 64.3457 59.3564 64.8834C59.9544 65.4211 60.7283 65.716 61.5288 65.7111H61.885C62.7339 65.6124 63.5097 65.1788 64.0434 64.5047C64.5772 63.8306 64.8256 62.9706 64.7346 62.1123C64.0853 56.2109 61.8587 50.5994 58.2934 45.8791C54.7281 41.1589 49.9586 37.5079 44.4961 35.3176ZM32.4825 32.9948C29.9208 32.9948 27.4165 32.2273 25.2865 30.7893C23.1564 29.3513 21.4962 27.3075 20.5159 24.9163C19.5355 22.525 19.279 19.8937 19.7788 17.3552C20.2786 14.8167 21.5122 12.4849 23.3237 10.6547C25.1351 8.82451 27.4431 7.57814 29.9556 7.07319C32.4682 6.56824 35.0725 6.8274 37.4393 7.81789C39.8061 8.80838 41.829 10.4857 43.2523 12.6378C44.6755 14.7898 45.4352 17.32 45.4352 19.9083C45.4352 23.379 44.0705 26.7076 41.6414 29.1618C39.2124 31.616 35.9178 32.9948 32.4825 32.9948Z" fill="black"/>
                        </svg>
                    </div>
                    <h2>Leah Glenn Amor</h2>
                </div>
                <span>04834384</span>
                <div className="userProfileBody">
                    <span>Account Number</span>
                    <h3>41 years old</h3>
                    <h3>Purok-5 Talairon, Oroquieta City</h3>
                </div>
                <div className="userProfileFooter">
                    <div className="userProfileFootCell">
                        <svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.6761 0.5H9.29577C6.83038 0.5 4.46597 1.43744 2.72267 3.10608C0.979374 4.77473 0 7.0379 0 9.39773V39.0568C0 41.4166 0.979374 43.6798 2.72267 45.3485C4.46597 47.0171 6.83038 47.9545 9.29577 47.9545H52.6761C55.1415 47.9545 57.5059 47.0171 59.2492 45.3485C60.9925 43.6798 61.9718 41.4166 61.9718 39.0568V9.39773C61.9718 7.0379 60.9925 4.77473 59.2492 3.10608C57.5059 1.43744 55.1415 0.5 52.6761 0.5ZM9.29577 6.43182H52.6761C53.4979 6.43182 54.286 6.7443 54.8671 7.30051C55.4482 7.85673 55.7746 8.61112 55.7746 9.39773L30.9859 23.8714L6.19718 9.39773C6.19718 8.61112 6.52364 7.85673 7.10474 7.30051C7.68584 6.7443 8.47398 6.43182 9.29577 6.43182ZM55.7746 39.0568C55.7746 39.8434 55.4482 40.5978 54.8671 41.154C54.286 41.7102 53.4979 42.0227 52.6761 42.0227H9.29577C8.47398 42.0227 7.68584 41.7102 7.10474 41.154C6.52364 40.5978 6.19718 39.8434 6.19718 39.0568V16.16L29.3746 29.7142C29.8457 29.9745 30.38 30.1116 30.9239 30.1116C31.4679 30.1116 32.0022 29.9745 32.4732 29.7142L55.7746 16.16V39.0568Z" fill="black"/>
                        </svg>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="userProfileFootCell">
                        <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.7168 27.1771C37.2401 27.1771 36.7418 27.0057 36.2651 26.8833C35.3006 26.6397 34.3522 26.3207 33.4268 25.9286C32.4216 25.5155 31.3167 25.537 30.3248 25.9889C29.3328 26.4408 28.5238 27.2912 28.0534 28.3766L27.5767 29.5026C25.4725 28.1543 23.5286 26.5092 21.7917 24.6068C20.1079 22.6445 18.6518 20.4482 17.4584 18.0708L18.4551 17.5568C19.4157 17.0254 20.1684 16.1113 20.5684 14.9906C20.9684 13.8698 20.9874 12.6216 20.6217 11.4859C20.2777 10.431 19.9954 9.35154 19.7768 8.25469C19.6684 7.71615 19.5818 7.15312 19.5168 6.61458C19.2536 4.89032 18.4543 3.32885 17.2626 2.21137C16.0709 1.09389 14.5653 0.493834 13.0168 0.519271H6.49508C5.57912 0.517915 4.67324 0.735294 3.83684 1.15716C3.00044 1.57902 2.25239 2.19584 1.64175 2.96719C1.01844 3.75946 0.554332 4.6948 0.281307 5.70894C0.00828069 6.72308 -0.0671889 7.79197 0.0600828 8.84219C1.23786 19.0308 5.35804 28.4957 11.7818 35.7693C18.2197 43.0268 26.5971 47.6818 35.6151 49.0125C35.8963 49.0368 36.1788 49.0368 36.4601 49.0125C38.0578 49.0151 39.6004 48.3529 40.7934 47.1521C41.4761 46.4622 42.0221 45.617 42.3955 44.6721C42.7689 43.7271 42.9613 42.7036 42.9601 41.6687V34.325C42.9484 32.6336 42.4203 30.9986 41.4649 29.6962C40.5096 28.3939 39.1856 27.504 37.7168 27.1771ZM38.7784 41.8646C38.7777 42.2062 38.7137 42.5438 38.5906 42.8558C38.4674 43.1678 38.2879 43.4472 38.0634 43.676C37.826 43.9205 37.5434 44.1022 37.2361 44.208C36.9288 44.3139 36.6045 44.3412 36.2868 44.288C28.2013 43.095 20.6873 38.932 14.9018 32.4401C9.11127 25.898 5.39448 17.379 4.32842 8.20573C4.28135 7.8467 4.30553 7.48035 4.39921 7.13318C4.49289 6.78601 4.65373 6.46673 4.87008 6.19844C5.07509 5.94178 5.3259 5.73709 5.60599 5.59786C5.88608 5.45862 6.18909 5.38799 6.49508 5.39062H12.9951C13.4959 5.37679 13.9855 5.55949 14.3806 5.90762C14.7756 6.25575 15.0517 6.7478 15.1618 7.3C15.1618 7.96094 15.3567 8.64635 15.4867 9.30729C15.7372 10.5897 16.0703 11.8496 16.4834 13.0771L13.4501 14.6927C12.9287 14.9631 12.5235 15.4561 12.3234 16.0635C12.1067 16.6595 12.1067 17.328 12.3234 17.924C15.4417 25.4703 20.8108 31.5363 27.4901 35.0594C28.0176 35.3042 28.6092 35.3042 29.1367 35.0594C29.6744 34.8333 30.1107 34.3755 30.3501 33.7865L31.7151 30.3594C32.8329 30.8199 33.9765 31.1961 35.1384 31.4854C35.7017 31.6323 36.3084 31.7547 36.8934 31.8526C37.3822 31.977 37.8177 32.2888 38.1258 32.7352C38.434 33.1815 38.5957 33.7347 38.5834 34.3005L38.7784 41.8646ZM25.9951 0.25H24.4784C23.9038 0.305184 23.3721 0.616013 23.0003 1.11411C22.6285 1.6122 22.4471 2.25676 22.4959 2.90599C22.5448 3.55522 22.8199 4.15593 23.2607 4.57599C23.7016 4.99604 24.2721 5.20102 24.8468 5.14583H25.9951C29.4429 5.14583 32.7495 6.69326 35.1875 9.4477C37.6254 12.2021 38.9951 15.938 38.9951 19.8333V21.1307C38.947 21.7765 39.1276 22.4175 39.4972 22.9131C39.8668 23.4086 40.3953 23.7184 40.9668 23.7745H41.1401C41.6825 23.777 42.206 23.5495 42.6071 23.1371C43.0083 22.7246 43.2579 22.1572 43.3068 21.5469V19.8333C43.3068 14.6437 41.4835 9.66636 38.2376 5.99447C34.9917 2.32259 30.5884 0.256487 25.9951 0.25ZM30.3284 19.8333C30.3284 20.4826 30.5567 21.1052 30.963 21.5643C31.3693 22.0233 31.9204 22.2812 32.4951 22.2812C33.0697 22.2812 33.6208 22.0233 34.0271 21.5643C34.4335 21.1052 34.6618 20.4826 34.6618 19.8333C34.6618 17.2364 33.7487 14.7459 32.1233 12.9096C30.498 11.0733 28.2936 10.0417 25.9951 10.0417C25.4204 10.0417 24.8693 10.2996 24.463 10.7586C24.0567 11.2177 23.8284 11.8404 23.8284 12.4896C23.8284 13.1388 24.0567 13.7614 24.463 14.2205C24.8693 14.6796 25.4204 14.9375 25.9951 14.9375C27.1444 14.9375 28.2466 15.4533 29.0592 16.3715C29.8719 17.2896 30.3284 18.5349 30.3284 19.8333Z" fill="black"/>
                        </svg>
                        <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;