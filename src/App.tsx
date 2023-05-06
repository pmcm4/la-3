import styles from './App.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function App() {
    return (
        <div className={`${styles.App} ${styles.backgroundImage}`}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683338803/i_miss_you_logo_copy_nzz7vt.png"
                        className={styles.logo}
                        alt='imylogo'
                    />
                    <div className={styles.menuItems}>
                        <span className={styles.navBar}>Menu</span>
                        <span className={styles.navBar}>Models</span>
                        <span className={styles.navBar}>API</span>
                        <span className={styles.navBar}>Pricing</span>
                        <span className={styles.navBar}>About Us</span>
                    </div>
                    
                    <button className={styles.loginbtn}>LOGIN</button>
                </div>
                <div className={styles.content}>
                    <div className={styles.container2}>
                        <div className={styles.circle} />
                        <div className={styles.container}>
                            <h1 className={styles.heading}>IMISSYOU AI</h1>
                            <div className={styles.pGroup}>
                                <p className={styles.p1p}>
                                    Fast and Easy. <br />
                                    40 Finetuned Models. <br />
                                    Explore The Impossible.
                                </p>
                            </div>
                            <button className={styles.tryNow}>TRY NOW</button>
                        </div>
                        <img
                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683344331/just-reposting-some-cute-stuff-_-whatever-not-mine_ehoh2a.gif"
                            className={styles.imgrd}
                            alt='hahah'
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.logoFoot}>
                        <img
                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1683338803/i_miss_you_logo_copy_nzz7vt.png"
                            className={styles.logoFooter}
                            alt='aaaa'
                        />
                    </div>
                    <div className={styles.siteMap}>
                        <h1 className={styles.footSiteMap}>Site Map</h1>
                        <span className={styles.siteMapItems}>
                            Models
                        </span>
                        <span className={styles.siteMapItems}>
                            Contact
                        </span>
                        <span className={styles.siteMapItems}>
                            API
                        </span>

                    </div>
                    <div className={styles.subs}>
                        <div className={styles.esub}>
                            <input className={styles.emailadd} placeholder="EMAIL ADDRESS"></input>
                            <button className={styles.btnAdd}>SUBSCRIBE</button>
                        </div>
                        <div className={styles.icons}>
                           <FacebookIcon fontSize="large" sx={{ color: 'white', cursor:'pointer'}} className={styles.iconsea}/>
                            <InstagramIcon fontSize="large" sx={{ color: 'white', cursor:'pointer'  }} className={styles.iconsea}/>
                            <TwitterIcon fontSize="large" sx={{ color: 'white', cursor:'pointer'  }} className={styles.iconsea}/>
                            <EmailIcon fontSize="large" sx={{ color: 'white', cursor:'pointer'  }} className={styles.iconsea}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
