// core
import React, { useState }from 'react'
import { graphql } from 'gatsby'

import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

// components
import { Seo } from '../components/Seo'
import { YoutubeVideo } from "../components/YouTubeVideo";
import LayoutEmbeddedPage from '../components/LayoutEmbeddedPage'
import MicrositeHeader from '../components/microsites/MicrositeHeader'
import Footer from "../components/Footer";
import ImgWithFallback from '../components/ImgWithFallback'


// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as images from '../assets/images/cracktheclaw'



const CrackTheClawMicrositePage = ({data}) => {
  const [isVideoPlay, setIsVideoPlay] = useState(false)
  const [isTeaserPlay, setIsTeaserPlay] = useState(false)
  const [isRulesOpen, setIsRulesOpen] = useState(false)
  const [isRolesOpen, setIsRolesOpen] = useState(false)
  const [isScriptOpen, setIsScriptOpen] = useState(false)

  const pageContent = data.prismicMicrosite
  const { meta_title, meta_description, social_card } = data.prismicMicrosite.data

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
      <LayoutEmbeddedPage >
        <MicrositeHeader customPage="microsite-claws-out"/>
        <Seo
            title={meta_title?.text}
            description={ meta_description?.text}
            image={social_card?.url }
        />
        <main id="contest-page" className="us-site en ms-contest ms-contest--cracktheclaw modal-closed" style={{backgroundImage:`url(${(images.paperTextureBg)}`}}>
          {/*INTRO SECTION */}
          <section className="intro-section position-relative">
            <div className="wooden-bg-center position-absolute" style={{backgroundImage:`url(${(images.woodenBgCenter)}`}}></div>
            <div className="intro-section--content">
              <div className="intro-section--live-page" >
                <div className="hero-container position-relative" >
                  <div className="hero-title--can-you">
                    < ImgWithFallback
                        classNameImg='w-100'
                        src={images.canYou}
                        alt='Can you'
                        fallbackSrc={images.canYouWebp}
                    />
                  </div>
                  <div className="hero-title--crack-the">
                    < ImgWithFallback
                        classNameImg='w-100'
                        src={images.crackThe}
                        alt='Crack the'
                        fallbackSrc={images.crackTheWebp}
                    />
                  </div>
                  <div className="hero-title--case">
                    < ImgWithFallback
                        classNameImg='w-100'
                        src={images.caseIm}
                        alt='Case'
                        fallbackSrc={images.caseImWebp}
                    />
                  </div>
                  <div className="position-absolute hero-you-underline">
                    < ImgWithFallback
                        classNameImg='w-100'
                        src={images.heroYouUnderline}
                        alt='Underline'
                        fallbackSrc={images.heroYouUnderlineWebp}
                    />
                  </div>
                  <div className="position-absolute hero-arrow-line">
                    < ImgWithFallback
                        classNameImg='w-100'
                        src={images.heroArrow}
                        alt='Underline'
                        fallbackSrc={images.heroArrowWebp}
                    />
                  </div>
                  <p className="hero-description">
                    White Claw® and Netflix invite you to play a dangerously fun murder mystery game inspired by Glass Onion: A Knives Out Mystery.
                  </p>
                  <div className="hero-content-wrapper">
                    <div className="hero-companies-logos">
                      < ImgWithFallback
                          classNameImg='w-100'
                          src={images.companies}
                          alt='Class Onion, White Claw, Netflix logos'
                          fallbackSrc={images.companiesWebp}
                      />
                    </div>
                    <div  className="position-relative craw-out-btn-wrap text-center">
                      <button className="craw-out-btn" >
                        < ImgWithFallback
                            classNameImg='w-100'
                            src={images.soldOutButton}
                            alt='Sold out'
                            fallbackSrc={images.soldOutButtonWebp}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        {/* EOF INTRO SECTION */}

          {/* FILM SECTION */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
        <a id="film" className="anchor"></a>
        <section className="film-section position-relative  anchor-component" data-link="film">
          <div className="film-section-title">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.filmSectionTitle}
                alt='This holiday season will be killed'
                fallbackSrc={images.filmSectionTitleWebp}
            />
          </div>
          <div className="film-section-title--mobile animation-element-container bounce-up">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.filmSectionTitleMob}
                alt='This holiday season will be killed'
                fallbackSrc={images.filmSectionTitleMobWebp}
            />
          </div>
          <div className="film-section-title-underline position-absolute animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.codeUnderline}
                alt='Underline'
                fallbackSrc={images.codeUnderlineWebp}
            />
          </div>
          <div className="container-fluid">
            <div className="film-content position-relative"
                 style={{ backgroundImage: isVideoPlay ? "unset" : `url(${images.filmThumb})`}}>
              { !isVideoPlay && <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
                <a className="js-video-wrapper mt-5" >
                  < ImgWithFallback
                      classNameImg='js-play-btn play-button'
                      src={images.playVideoBtn}
                      alt='Play Button'
                      fallbackSrc={images.playVideoBtn}
                      onClick={() => { setIsVideoPlay(true) }}
                  />
                </a>
              </div> }
              { isVideoPlay &&<div className="inline-video w-100">
                 <YoutubeVideo youtubeSrc={'https://www.youtube.com/embed/a92BXjJzEcg'}/>
              </div> }
            </div>
          </div>
          <div className="double-arrows-left position-absolute animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.doubleArrows}
                alt='Arrows'
                fallbackSrc={images.doubleArrowsWebp}
            />
          </div>
          <div className="double-arrows-right position-absolute animation-element-container fade-in-content ">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.doubleArrows}
                alt='Arrows'
                fallbackSrc={images.doubleArrowsWebp}
            />
          </div>
        </section>
          {/* EOF FILM SECTION */}

          {/* GET GAME SECTION */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
        <a id="game" className="anchor"></a>
        <section className="game-section position-relative  anchor-component" data-link="game">
          <div className="game-section-title animation-element-container bounce-left">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.getTheGameTitle}
                alt='Get the Game'
                fallbackSrc={images.getTheGameTitleWebp}
            />
          </div>
          <div className="game-section-title-underline position-absolute animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.gameUnderline}
                alt='Underline'
                fallbackSrc={images.gameUnderline}
            />
          </div>
          <div className="game-section-carousel-container">
            <div className="row game-section-carousel-row">
              <div className="col-12 col-lg-6 p-0 crack-the-claw-carousel">

               {/*Slider main container */}
                <div className="swiper-container">
                  {/*Additional required wrapper*/}
                  <Swiper className="swiper-wrapper"
                          initialSlide={0}
                          slidesPerView={1}
                          spaceBetween={0}
                          centeredSlides={true}
                          loop={true}
                          autoplay={true}
                          modules={[Navigation, Autoplay]}
                          navigation={true}>
                     {/* Slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="swiper-img-wrap">
                        <div className="swiper-img">
                          < ImgWithFallback
                              classNameImg=''
                              src={images.carousel1}
                              alt='Game'
                              fallbackSrc={images.carousel1Webp}
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="swiper-img-wrap">
                        <div className="swiper-img">
                          < ImgWithFallback
                              classNameImg=''
                              src={images.carousel2}
                              alt='Game'
                              fallbackSrc={images.carousel2Webp}
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="swiper-img-wrap">
                        <div className="swiper-img">
                          < ImgWithFallback
                              classNameImg=''
                              src={images.carousel3}
                              alt='Game'
                              fallbackSrc={images.carousel3Webp}
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="swiper-img-wrap">
                        <div className="swiper-img">
                          < ImgWithFallback
                              classNameImg=''
                              src={images.carousel4}
                              alt='Game'
                              fallbackSrc={images.carousel4Webp}
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="swiper-img-wrap">
                        <div className="swiper-img">
                          < ImgWithFallback
                              classNameImg=''
                              src={images.carousel5}
                              alt='Game'
                              fallbackSrc={images.carousel5Webp}
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Slide */}
                    <SwiperSlide className="swiper-slide">
                      <div className="swiper-img-wrap">
                        <div className="swiper-img">
                          < ImgWithFallback
                              classNameImg=''
                              src={images.carousel6}
                              alt='Game'
                              fallbackSrc={images.carousel6Webp}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                 {/* eof swiper-wrapper */}
                </div>
                 {/*eof swiper-container */}
              </div>

              <div className="col-12 col-lg-6 game-section-content text-center">
                <p className="game-section-about-game">
                  This game is a murder mystery set on a private Greek Island. Uncover the murderers among you, before it’s too late. Traitorous friends and family members not included.
                </p>
                <p className="game-section-how-to-get">
                  You murdered all the games and none are left for purchase. Enter for a chance to win one of the last few.
                </p>
                <div  className="position-relative craw-out-btn-wrap text-center">
                  <button className="craw-out-btn">
                    < ImgWithFallback
                        classNameImg='w-100'
                        src={images.soldOutButton}
                        alt='Sold out'
                        fallbackSrc={images.soldOutButtonWebp}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>
         {/*EOF GET GAME SECTION */}

         {/*HOW TO PLAY SECTION */}

        <section className="how-to-play-section position-relative ">
          <div className="how-to-play-title position-relative animation-element-container bounce-right">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.howToPlayTitle}
                alt='How to play'
                fallbackSrc={images.howToPlayTitleWebp}
            />
          </div>

          <div className="how-to-play-title-asterisk position-absolute animation-element-container fade-in-content ">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.asterisk}
                alt='Asterisk'
                fallbackSrc={images.asterisk}
            />
          </div>

          {/* accordion-item */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
          <a id="rules" className="anchor"></a>
          <div className="accordion-item anchor-component" style={{marginTop: "100px"}} >
            <input type="checkbox" id="setup" className="accordion-checkbox" onClick={()=>{setIsRulesOpen(!isRulesOpen)}}/>
              <h4 className="accordion-title">
                <label className="accordion-label" htmlFor="setup">Rules
                  <span className="accordion-icon" style={{backgroundImage: isRulesOpen ?`url(${(images.close)}` : `url(${(images.plus)}`}}></span>
                </label>
              </h4>
              <div className="accordion-expanded accordion-expanded--setup-group">
                <div className="accordion-expanded--setup">
                  <p className="americana-bold">The Moderator retrieves the white coaster and then creates a ‘deck’ of coasters to hand out.</p>
                  <p><span className="americana-bold">Every game</span> must be played with 1 Detective, 1 Doctor, and 1 Moderator. The number of Murderers can increase based on the player size (1 for 6, 2 for 8, and 3 for 9-10 players.) The remaining players are Vacationers.</p>
                  <p>The Moderator should let the players know how many Murderers there are, shuffle the coasters, and deal one to each player. Players, will discreetly look at the bottoms of their coasters to learn their roles. Throughout the game, players may claim to have any role, but they are not allowed to physically reveal their coaster to anyone.</p>

                  <p>Each round is divided into two phases, Day and Night.</p>
                  <p>During the Night Phase, players close their eyes while the Moderator guides them through the use of their different abilities by reading a set of prompts.</p>
                  <p>Players then open their eyes and learn if anyone was murdered overnight. During the Day phase, the Guests try to uncover the identities of Murderer(s), culminating in a vote of Accusation.</p>
                  <p>After a few minutes of discussion, or once the group reaches a consensus, the Moderator will indicate that it is time to Accuse. All Players raise their index finger to the sky, and after the Moderator counts down from three, players may either keep their fingers pointed up to skip their vote or point at another player in accusation.</p>

                  <p>Any player that has the majority of fingers pointed their way is voted off the island and reveals their role. If they were the <span className="americana-bold">Final Murderer</span> or <span className="americana-bold">Second-to-Last Guest</span>, the game ends. If two players receive the same amount of votes, no one reveals their role, and the game continues.</p>
                  <p>Be wary! Clever and convincing Murderers will use this opportunity to remove Guests by casting suspicion. After the Accusation is resolved, the Night phase continues.</p>
                  <p>Any players who have been murdered or voted off the island can watch the game, but cannot vote or influence the other players until a new game starts.</p>
                  <p><span className="americana-bold">HOW THE GAME ENDS</span> when every Murderer has been found, the Guests win the round. When every Guest but one has been revealed or murdered, the Murderers win the round.</p>
                </div>
                <div className="accordion-expanded--setup-overview">
                  <h5 className="americana-bold">Overview</h5>
                  <p className="pb-3">Crack the CLAW™ is a murder mystery game for 6-10 players (21+) that takes place in the Knives Out universe. One player, often the host, will facilitate the experience and act as <span className="americana-bold">the Moderator</span>. The remaining players are secretly divided into two teams, <span className="americana-bold">the Guests</span> - comprised of the Detective, Doctor, and Vacationers - and <span className="americana-bold">the Murderer(s).</span></p>
                  <p className="pb-3">The Guests’ objective is to correctly identify all Murderers before they perish.</p>
                  <p className="pb-3">The Detective can identify whether one person is a Murderer each night.</p>
                  <p className="pb-3">The Doctor can choose one person to save each night, including themself.</p>
                  <p className="pb-3">The Murderers’ objective is to kill every Guest but one before getting identified.</p>
                  <p className="americana-bold">The team that reaches its objective first wins.</p>
                </div>
              </div>
          </div>
         {/*eof  accordion-item  */}

          {/* accordion-item */}
          <div className="accordion-item">
            <input type="checkbox" id="rules-item" className="accordion-checkbox" onClick={()=>{setIsRolesOpen(!isRolesOpen)}}/>
              <h4 className="accordion-title">
                <label className="accordion-label" htmlFor="rules-item">Roles <span className="accordion-icon" style={{backgroundImage: isRolesOpen ?`url(${(images.close)}` : `url(${(images.plus)}`}}></span></label>
              </h4>
              <div className="accordion-expanded">
                <div className="accordion-expanded--rules">
                  <div className="row">
                    <div className="col-lg-6 p-5">
                      < ImgWithFallback
                          classNameImg='w-100'
                          src={images.moderatorRole}
                          alt='Moderator'
                          fallbackSrc={images.moderatorRoleWebp}
                      />
                    </div>
                    <div className="col-lg-6 accordion-expanded--role-desc pb-4">
                      <p>The eyes, ears, and voice of Crack the CLAW™. You will read the script and MC the game. You know everyone's roles and are tasked with facilitating the kills, saves, and inquiries.</p>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex accordion-expanded--roles-group">
                    <div className="col-lg-6 col-12 d-flex accordion-expanded--role">
                      <div className="col-lg-5 col-4 px-0">
                        < ImgWithFallback
                            classNameImg='w-100'
                            src={images.detectiveRole}
                            alt='Detective'
                            fallbackSrc={images.detectiveRoleWebp}
                        />
                      </div>
                      <div className="col-lg-7 col-sm-8 accordion-expanded--role-desc">
                        <p>The investigator of the group. Channel your inner Benoit Blanc and unveil the killer among you. Each night, you can uncover whether one of your fellow vacationers is a murderer or not. Use this knowledge wisely while voting.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex accordion-expanded--role">
                      <div className="col-lg-5 col-4 px-0">
                        < ImgWithFallback
                            classNameImg='w-100'
                            src={images.vacationerRole}
                            alt='Vacationer'
                            fallbackSrc={images.vacationerRoleWebp}
                        />
                      </div>
                      <div className="col-lg-7 accordion-expanded--role-desc">
                        <p>The goal of the vacationers is to band together to uncover and vote out the murderer(s) among you. Beware of murderers pretending to be one of you.</p>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-12 d-flex accordion-expanded--roles-group">
                    <div className="col-lg-6  col-12 d-flex accordion-expanded--role">
                      <div className="col-lg-5 col-4 px-0">
                        < ImgWithFallback
                            classNameImg='w-100'
                            src={images.doctorRole}
                            alt='Doctor'
                            fallbackSrc={images.doctorRoleWebp}
                        />
                      </div>
                      <div className="col-lg-7 accordion-expanded--role-desc">
                        <p>The savior of the group. Each night you will choose one person to save. If that person happened to be murdered, they are still in the game thanks to you. You can save yourself if you so choose.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex accordion-expanded--role">
                      <div className="col-lg-5  col-4 px-0">
                        < ImgWithFallback
                            classNameImg='w-100'
                            src={images.murdererRole}
                            alt='Murderer'
                            fallbackSrc={images.murdererRoleWebp}
                        />
                      </div>
                      <div className="col-lg-7 accordion-expanded--role-desc">
                        <p>Each night you may choose one vacationer to murder. Lie, deceive and stay undetected to murder as many as you can. If you kill all but one of the vacationers, you and any other murderers win.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
          {/*eof  accordion-item  */}

          {/* accordion-item */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
          <a id="script" className="anchor"></a>
          <div className="accordion-item anchor-component"  data-link="script" >
            <input type="checkbox" id="moderator" className="accordion-checkbox" onClick={()=>{setIsScriptOpen(!isScriptOpen)}}/>
              <h4 className="accordion-title">
                <label className="accordion-label" htmlFor="moderator">Moderator script<span className="accordion-icon" style={{backgroundImage: isScriptOpen ?`url(${(images.close)}` : `url(${(images.plus)}`}}></span></label>
              </h4>
              <div className="accordion-expanded">

                <div className="accordion-expanded--scripts-overview">
                  <p className="pb-0"><span className="americana-bold">NOTE TO MODERATOR:</span> With the roles distributed, the game is ready to begin.
                    You, the Moderator, will guide the game and settle any rules disputes.
                    Please use the script above to guide you, but feel free to add any creative flair.
                    When multiple games are played in one sitting, after the first game,
                    the script can be read starting from the <span className="americana-bold">Night Script.</span>
                  </p>
                </div>
                <div className="accordion-expanded--scripts">
                  <div className="accordion-expanded--scripts-first-night">
                    <h5 className="americana-bold">FIRST NIGHT SCRIPT</h5>
                    <p>“Thank you all for joining me on this private Greek Isle. <span className="americana-bold"> I must warn you, some of your fellow travelers have taken the idea of having a killer vacation a little too literally. </span></p>
                    <p>Please discreetly check your coasters. No one else should know your role. </p>
                    <p>Each round is divided into two phases: <span className="americana-bold"> Day </span> and  <span className="americana-bold">Night</span>.  During the Day, players discuss what they’ve deduced, culminating in an Accusation to find the murderer.</p>
                    <p>Each Night I will tell you to close your eyes and go to sleep. I will then wake up specific roles, individually, and you will silently communicate with me by pointing.</p>
                    <p>As the bellhop robot is still bringing your bags to your rooms, there won’t be any Accusations today. This game is best played with a White Claw (21+). So crack open a beverage of your choice. </p>
                    <p>Tonight the game begins.”</p>
                  </div>
                  <div className="accordion-expanded--scripts-night">
                    <h5 className="americana-bold">NIGHT SCRIPT </h5>
                    <p>“Now, night has fallen. </p>
                    <p>Everyone, please close your eyes and go to sleep. </p>
                    <p><span className="americana-bold">Murderer(s)</span>, please wake up and open your eyes. Amongst yourselves, choose and point at who you would like to kill. Murderer(s) return to sleep.</p>
                    <p><span className="americana-bold">Doctor</span>, please wake up and open your eyes. Point at the person you want to save from death. Doctor, you may go back to sleep.</p>
                    <p><span className="americana-bold">Detective</span>, please wake up and open your eyes. Point to the person you would like to secretly investigate. Detective, you may go back to sleep.”</p>
                    <p><span className="americana-bold">[NOTE TO MODERATOR:</span> signal by nodding if they have pointed to a murderer or not.]</p>
                  </div>
                  <div>
                    <h5 className="americana-bold">DAY SCRIPT </h5>
                    <p>“All players may wake up and open their eyes.”</p>
                    <p><span className="americana-bold">[NOTE TO MODERATOR:</span> let the players know if the doctor saved the person who was murdered. If not, reveal to them who was killed last night. Each death is an opportunity for dramatic flair. You can select from the poetic death options below to get started, but feel free to create your own.]</p>
                    <p>“Now, amongst yourselves please discuss who you think is a murderer among you.”</p>
                    <p><span className="americana-bold">[NOTE TO MODERATOR:</span> after a few minutes of discussion, announce that there will be a round of Accusations before nightfall and ask all players to point their fingers to the sky. Count down from three and have players point at their Accused or skip by continuing to point to the sky.  The player who receives the most votes is voted off the island and reveals their role by flipping over their coaster.] </p>
                    <p>“Unfortunately, the group has voted (name) off the island. (Name), please flip over your coaster to reveal your role.”</p>
                    <p><span className="americana-bold">[NOTE TO MODERATOR:</span> Now return to the night sequence.]</p>
                  </div>
                </div>


                <div className="accordion-expanded--scripts-game-over">
                  <h5 className="americana-bold">A WORTHY DEATH</h5>
                  <p className="text-uppercase americana-bold">Inspiration for how Guests perish. Feel free to freestyle your own!</p>
                  <p>Last night, <span>(name) was impaled by a glass sculpture in the Great Hall.</span> </p>
                  <p>Last night,<span> (name)  was killed by a popped Champagne cork to the eye. If only they had been sipping White Claw.</span> </p>
                  <p>Last night,<span> (name)  washed up on shore in front of our villa.</span></p>
                  <p>Last night,<span> (name)  ate caviar laced with a potent poison. </span></p>
                </div>
              </div>
          </div>
          {/*eof  accordion-item  */}
        </section>
         {/* EOF  HOW TO PLAY SECTION */}

         {/* SEE FILM SECTION */}
        <section className="see-film-section position-relative ">
          <div className="see-film-section-title animation-element-container bounce-right ">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.inspirationTitle}
                alt='CHANNEL YOUR INNER BENOIT BLANC'
                fallbackSrc={images.inspirationTitleWebp}
            />
          </div>
          <div className="see-film-section-kate-hudson position-relative animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.kateHudson}
                alt='Asterisk'
                fallbackSrc={images.kateHudsonWebp}
            />
            < ImgWithFallback
                classNameImg='see-film-section-asterisk position-absolute'
                src={images.asterisk}
                alt='Asterisk'
                fallbackSrc={images.asterisk}
            />
          </div>
          <div className="see-film-section-wc-pack animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.wcPack}
                alt='White Claw Pack'
                fallbackSrc={images.wcPackWebp}
            />
            < ImgWithFallback
                classNameImg='see-film-section-round position-absolute'
                src={images.round}
                alt='Lines'
                fallbackSrc={images.roundWebp}
            />
          </div>
          <div className="see-film-section-subtitle animation-element-container bounce-left">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.everyoneIsSuspect}
                alt='Everyone is suspect'
                fallbackSrc={images.everyoneIsSuspectWebp}
            />
          </div>
          <div className="see-film-section-kathryn-hahn position-relative animation-element-container fade-in-content ">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.kathrynHahn}
                alt='Kathryn Hahn'
                fallbackSrc={images.kathrynHahnWebp}
            />
            < ImgWithFallback
                classNameImg='see-film-section-round position-absolute'
                src={images.round}
                alt='Lines'
                fallbackSrc={images.roundWebp}
            />
          </div>
          <div className="see-film-section-arrows position-absolute animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.threeArrows}
                alt='Lines'
                fallbackSrc={images.threeArrowsWebp}
            />
          </div>
        </section>
        {/* EOF  SEE FILM SECTION */}

         {/* TEASER SECTION */}
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/}
        <a id="movie" className="anchor"></a>
        <section  className="teaser-section position-relative  anchor-component" data-link="movie">
          <div className="teaser-section-title animation-element-container bounce-right">
            < ImgWithFallback
                classNameImg='w-100'
                src={images.seeTheFilm}
                alt='See the film'
                fallbackSrc={images.seeTheFilmWebp}
            />
          </div>
          <div className="animation-element-container fade-in-content">
            < ImgWithFallback
                classNameImg='position-absolute teaser-section-film-underline'
                src={images.lineRound}
                alt='Lines'
                fallbackSrc={images.lineRoundWebp}
            />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="teaser-section-glass-onion animation-element-container fade-in-content">
                < ImgWithFallback
                    classNameImg='w-100'
                    src={images.glassOnion}
                    alt='Glass Onion 23 december. Netflix'
                    fallbackSrc={images.glassOnionWebp}
                />
                < ImgWithFallback
                    classNameImg='position-absolute teaser-section-december-underline'
                    src={images.decemberUnderline}
                    alt='Line'
                    fallbackSrc={images.decemberUnderlineWebp}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="container-fluid">
                <div className="teaser-section-content position-relative"  style={{ backgroundImage: isTeaserPlay ? "unset" : `url(${images.teaserThumb})`}}>
                  {!isTeaserPlay && <div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events*/}
                    <a className="js-video-wrapper mt-5"
                       onClick={()=>setIsTeaserPlay(true)}>
                      < ImgWithFallback
                          classNameImg='js-play-btn play-button'
                          src={images.playVideoBtn}
                          alt='Play Button'
                          fallbackSrc={images.playVideoBtn}
                      />
                    </a>
                  </div> }
                  { isTeaserPlay && <div className="inline-video w-100">
                    <YoutubeVideo youtubeSrc={'https://www.youtube.com/embed/gj5ibYSz8C0'}/>
                  </div> }
                </div>
              </div>
            </div>

          </div>
        </section>
        {/*EOF  TEASER SECTION */}
      </main>
        <Footer activeDocMeta={activeDoc}/>
      </LayoutEmbeddedPage>
  )
}

export const query = graphql`
  query CrackTheClawMicrositePageQuery {
    prismicMicrosite (uid: {eq: "cracktheclaw"}) {
       _previewable
       data {
        meta_title {
            text
        }
        social_card{
          url
        }
        meta_description {
          text
        }
      }
      lang
      type
      alternate_languages {
       lang
      }
      url
    }
  }
 `

export default withPrismicPreview(CrackTheClawMicrositePage)