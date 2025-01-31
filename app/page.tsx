import Image from "next/image";
import { Metadata } from "next";
import './style.css';


export const metadata: Metadata = {
    title: "GlobalSkins",
    description: "GlobalSkins - Blender Addon",
  };


export default function Home() {
  return (
    <div className="container-wrapper">
      {/* <!-- Hero Container Start --> */}
      <div className="hero-container">
        <div className="hero-container-bg">
          <img src="include/images/hero/hero-bg.gif" alt=""/>
        </div>
        <div className="hero-container-content">
          <div className="hcc-upper">
            <h1>Breathtaking realism in a single click</h1>
            <p>
              GlobalSkin is the all-in-one solution for realistic characters in
              Blender, now supporting all major UVs and infinite customisation
              options.
            </p>
          </div>
          <div className="hcc-video">
            <div className="hcc-video-box">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/nLtwpmkG_sY"></iframe>
            </div>
          </div>
          <div className="hcc-lower">
            <p>GLOBALSKIN IS ADAPTED TO THE UVS OF</p>
            <div className="hcc-logo-list">
              <div className="hcc-logo-box">
                <img src="include/images/hero/daz3d-genesis-9-8-logo.png" alt=""/>
              </div>
              <div className="hcc-logo-box">
                <img src="include/images/hero/metahuman-logo.png" alt=""/>
              </div>
              <div className="hcc-logo-box">
                <img src="include/images/hero/character-creator-4-logo.png" alt=""/>
              </div>
              <div className="hcc-logo-box">
                <img src="include/images/hero/human-generator-logo.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Container End   --> */}

      {/* <!-- Features container start --> */}
      <div className="content-container pb-0 features-container">
        <div className="heading">
          <h3>Features</h3>
        </div>
        <div className="features-list">
          <div className="features-item fi-full">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-1.gif" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Unmatched Realism.</span> GlobalSkin creates
                  photorealistic human models with exact precision, using
                  real-world measurements and thousands of hours of tweaking.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-2.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Even faster than before.</span> Enjoy unmatched
                  efficiency with real-time rendering, ensuring smooth
                  performance throughout editing.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-3.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Pre-made tones.</span> Save time and effort with our
                  pre-made tones, instantly transforming your models and
                  providing a perfect starting point for further customisation.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full text-bottom">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-4.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Better textures and tones.</span> GlobalSkin surpasses
                  Character Generator by removing seam cuts, improving
                  scattering and skin tones, and offering multiple displacers
                  for each body part.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-5.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Save time</span>. GlobalSkin saves hours typically spent
                  on perfecting photorealistic human models, allowing you to
                  focus on creativity rather than technical issues.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item text-bottom">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-6.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Community tested.</span> Enhanced with powerful new
                  features and refined based on user feedback, GlobalSkin
                  delivers unmatched realism.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-7.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Adapted for popular UVs.</span> GlobalSkin seamlessly
                  integrates with MetaHuman, Human Generator, Daz3D 8 and 9, and
                  CC4, ensuring consistent results across your favorite
                  platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-8.gif" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>New Effect Skins.</span> Add Freckles, Blemishes Veins,
                  Vitiligo, Acne, Paint Stains, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-9.jpg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Simplicity First.</span> Easily apply textures (albedos)
                  to your own skin tones and achieve fully customised results.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-10.jpeg" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Infinite Possibilities.</span> With over 70 textures and
                  tones, multiple displacers for body parts, MIX options, effect
                  skins, and more, you can create endless variations of your
                  characters.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item fi-full">
            <div className="features-box">
              <div className="features-box-bg">
                <img src="include/images/features/features-bg-11.gif" alt=""/>
              </div>
              <div className="features-box-text">
                <p>
                  <span>Makeup Added.</span> Base, Eyeshadow, Eyeliner, Blush,
                  Lips can now be adjusted across colour, glow, and blur to give
                  your characters that extra bit of detail.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="https://devsmp.com/daniel/scenes-html/" className="scene-blend-cta">
          <img src="include/images/features/scenes.png" alt=""/>
        </a>
      </div>
      {/* <!-- Features container end   --> */}

      {/* <!-- Testimonial container start --> */}
      <div className="content-container pb-0 testimonial-container">
        <div className="heading">
          <h3>Used by the best</h3>
        </div>
        <div className="testimonial-body">
          <div className="testimonial-box-1">
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img1.png)"
              }}>
              <div className="testimonial-icon">"</div>
              <h3>Plug and play with MetaHuman</h3>
              <div className="testimonial-quote">
                <p>
                  The new, seamless integration with MetaHuman and
                  HumanGenerator has made creating realistic humans easier than
                  ever before
                </p>
                <h6>Gabrielo Alex</h6>
              </div>
            </div>
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img2.png)"
              }}>
              <div className="testimonial-icon">"</div>
              <h3>It's Humanify x100</h3>
              <div className="testimonial-quote">
                <p>
                  The details are incredible! They've added so much more to this
                  product. Best Blender add-on I've purchased
                </p>
                <h6>Archfiendco</h6>
              </div>
            </div>
          </div>
          <div className="testimonial-box-2">
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img3.png)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>Versatile and Powerful</h3>
              <div className="testimonial-quote">
                <p>
                  GlobalSkin delivers stunning realism with minimal effort. A
                  game-changer for me. I think this will have a massive impact
                  on the Blender community
                </p>
                <h6>Kurzick</h6>
              </div>
            </div>
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img4.png)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>They did it again!</h3>
              <div className="testimonial-quote">
                <p>
                  Humanify was amazing. GlobalSkin is ridiculous. The team
                  delivers again! GlobalSkin is perfect for beginners and you’ll
                  be pleasantly surprised at how quickly you can get started
                </p>
                <h6>Jonathan Plesel</h6>
              </div>
            </div>
          </div>
          <div className="testimonial-box-3">
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img5.png)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>A must-have Blender add-on</h3>
              <div className="testimonial-quote">
                <p>
                  The variety of textures and effects gives me endless creative
                  freedom. GlobalSkin is a must-have for any 3D artist
                </p>
                <h6>Slade Dsgn</h6>
              </div>
            </div>
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img6.png)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>So much fun to play with</h3>
              <div className="testimonial-quote">
                <p>
                  I love how easy it is to get professional results. GlobalSkin
                  has become an essential part of my workflow
                </p>
                <h6>Soze</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial container end --> */}

      {/* <!-- Addons container start --> */}
      <div className="content-container addons-container pb-0">
        <div className="heading">
          <div className="sub-head">Addon Controls</div>
          <h3>
            Built with you in<br/>
            mind
          </h3>
          <p>
            We’re always working to improve our addons, so take this as a
            non-exhaustive (changing) list of GlobalSkin’s current capabilities.
          </p>
        </div>
        <div className="addon-list">
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon1.png" alt="Details"/>
              </div>
              <h4>Details</h4>
              <p>
                Edit the colour of specific areas like the nose, lips, cheeks,
                elbows, fingers, knees, and even pores.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon2.png" alt="Popular UVs"/>
              </div>
              <h4>Popular UVs</h4>
              <p>
                Adapted fully for use with HumanGenerator, MetaHuman, CC4, Daz3D
                G8 &amp; G9.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon3.png" alt="Skin Tones"/>
              </div>
              <h4>Skin Tones</h4>
              <p>
                Achieve authentic complexion variations, ensuring realism with
                Globalskins precise tones control.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon4.png" alt="Ambient Occlusion"/>
              </div>
              <h4>Ambient Occlusion</h4>
              <p>
                Any texture you add will carry our AO ambient occlusion texture
                to make it look more visually appealing.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon5.png" alt="Makeup"/>
              </div>
              <h4>Makeup</h4>
              <p>
                We’ve added a makeup section where you can adjust Eyeshadow,
                Eyeliner, Blush, Lips and more.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon6.png" alt="Displacements"/>
              </div>
              <h4>Displacements</h4>
              <p>
                We’ve added four new displacements and an additional ‘Micropore’
                which can be used to elevate realism.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Addons container end --> */}

      {/* <!-- Benefit container start --> */}
      <div className="content-container benefit-container pb-0">
        <div className="benefit-content-list">
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Ready Made Tones</h6>
              </div>
              <div className="bcb-right">
                <p>
                  GlobalSkin comes out of the box with five pre-made tones. You
                  can customise these tones across Hue, Saturation, Gamma,
                  Stains 1 and 2, and the colour of the stains.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Infinite Customisations</h6>
              </div>
              <div className="bcb-right">
                <p>
                  With 70+ textures and tones, improved scattering/skin tones,
                  multiple displacers for body parts, MIX options, effect skins
                  and more; you can now create infinite variations of your
                  characters.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>No Seam Cuts</h6>
              </div>
              <div className="bcb-right">
                <p>Gone gone gone!</p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Blender Compatibility</h6>
              </div>
              <div className="bcb-right">
                <p>
                  GlobalSkin is compatible with Blender version 4.2, and&nbsp;all
                  previous versions. We will continue to add compatibility for
                  future Blender versions.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Effect Skins</h6>
              </div>
              <div className="bcb-right">
                <p>
                  Effect skins are a small selection of effects to give a
                  different result to your skin, such as Freckles, Blemish 1, 2,
                  and 3, Veins, Vitiligo, Acne, and Paint Stains. You can edit
                  the colour/tone of all these effects; for example, to create
                  blue acne if desired.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Editing Hardness</h6>
              </div>
              <div className="bcb-right">
                <p>
                  All of the above features can be edited in hardness (not just
                  turned on or off). For example, you can activate acne and set
                  it to 0.7 hardness, to create a subtle effect.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Toggles &amp; Sliders</h6>
              </div>
              <div className="bcb-right">
                <p>
                  Easily make decisions and refine visual settings with toggles
                  for everything. Use sliders for control and to created a
                  desired effect.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Albedos</h6>
              </div>
              <div className="bcb-right">
                <p>
                  Easily use tones/textures (albedos) without having to open
                  nodes or similar.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Intuitive Toggles</h6>
              </div>
              <div className="bcb-right">
                <p>
                  Easily make decisions and refine visual settings with toggles
                  for everything.
                </p>
              </div>
            </div>
          </div>
          <div className="benefit-content-item">
            <div className="benefit-content-box">
              <div className="bcb-left">
                <h6>Subsurface Scattering</h6>
              </div>
              <div className="bcb-right">
                <p>
                  Edit and tweak hardness, saturation, and size. You can edit
                  the roughness and specularity (the amount of light the texture
                  reflects, for example, to achieve a wet or dry skin result).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Benefit container end --> */}

      {/* <!-- compersion container start --> */}
      <div className="content-container compersion-container pb-0">
        <div className="heading">
          <h3>Humanify vs GS</h3>
        </div>

        <div className="compersion-content">
          <div className="cc-head">
            <div className="cc-head-box">
              <h6>Humanify</h6>
            </div>
            <div className="cc-head-box">
              <h6>GlobalSkin</h6>
            </div>
          </div>

          <div className="cc-list">
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Free updates</h6></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-dark.svg" alt=""/>
                  </div>
                </div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>New features</h6></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-dark.svg" alt=""/>
                  </div>
                </div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Discord community</h6></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-dark.svg" alt=""/>
                  </div>
                </div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>GPL license</h6></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-dark.svg" alt=""/>
                  </div>
                </div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Daz3D G9 Compatibility</h6></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-dark.svg" alt=""/>
                  </div>
                </div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Daz3D G8 Compatability</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>MetaHuman Compatability</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text">
                  <h6>Human Generator Compatability</h6>
                </div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text">
                  <h6>Character Creator 4 Compatability</h6>
                </div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>No Visible Seams</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Makeup</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Micropores</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Effect Skins</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text">
                  <h6>Total Control over Blending</h6>
                </div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="cc-item">
              <div className="cc-box">
                <div className="cc-box-text"><h6>Hyperrealistic tones</h6></div>
                <div className="cc-box-icon"></div>
                <div className="cc-box-icon">
                  <div className="cbi-img">
                    <img src="include/images/check-blue.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- compersion container end --> */}

      {/* <!-- Video container start --> */}
      <div className="content-container video-container">
        <div className="heading">
          <h3>Learn more</h3>
        </div>
        <div className="video-list">
          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/qhyud1Ou4U0"></iframe>
          </div>
          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/_xLkkes0dHg"></iframe>
          </div>
          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/o6TnHSXSk0w"></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Video container end --> */}

      {/* <!-- footer start --> */}
      <footer>
        <div className="footer-left">
          <a href="#" className="footer-logo"><img src="include/images/global-skin.png" alt="global-skin"/></a>
          <div className="product-by-text">
            A PRODUCT BY
            <a href="#!"><img src="include/images/footer/blendify.png" alt=""/></a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.tiktok.com/@blendify.addons" target="_blank"><img src="include/images/footer/tiktok.svg" alt="Tiktok"/></a>
          <a href="https://www.instagram.com/blendify.addons/" target="_blank"><img src="include/images/footer/instagram.svg" alt="Instagram"/></a>
          <a href="https://x.com/GabrieloAlex" target="_blank"><img src="include/images/footer/twitter.svg" alt="Twitter"/></a>
          <a href="discord.gg/y3TK7e5s8S" target="_blank"><img src="include/images/footer/discord.svg" alt="Discord"/></a>
        </div>
      </footer>
      {/* <!-- footer end   --> */}
    </div>
  );
}
