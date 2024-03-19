<template>
  <div>
    <body>
      <header>
        <h2 class="header-title">
          <span class="header-title-icon1">
            <img src="../assets/vector/header.png" alt=""
          /></span>
          <span class="header-title-icon2">
            <img src="../assets/vector/header_title2.svg" alt=""
          /></span>
          <span class="scissor"><a href="#"> scissor</a></span>
        </h2>
        <ul class="top-menu-container">
          <li><a class="my-urls" href="#myurls">My URLs</a></li>
          <li>
            <a class="features" href="#"
              >Features
              <span><img src="../assets/vector/features.svg" alt="" /></span
            ></a>
            <div class="sub-menu">
              <ul>
                <li class="branded"><a href="#">Branded Links</a></li>
                <li><a href="#">Mobile Links</a></li>
                <li><a href="#">Campaign</a></li>
                <li><a href="#">Management & Analytics</a></li>
                <li><a href="#">QR Code generation</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#pricing">Pricing</a></li>
          <router-link to="/analytics">Analytics</router-link>
          <li><a href="#faq">FAQs</a></li>
        </ul>

        <section class="part-one">
          <div class="optimize">
            <h1>
              Optimize Your Online Experience with Our Advanced
              <span> URL Shortening</span> Solution
            </h1>
            <div class="optimize-logo-container">
              <img src="../assets/vector/optimize.svg" alt="A Logo" />
            </div>
          </div>
          <div class="first-para-container">
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>
          </div>
          <div class="signUp-learnMore-container">
            <button>Sign Up</button>
            <div><a class="learn-more" href="">Learn more</a></div>
          </div>
        </section>
      </header>

      <main>
        <section class="part-two">
          <div class="box-below-signUp">
            <div class="links-container">
              <img src="../assets/vector/link.svg" alt="A link symbol" />
              <img src="../assets/vector/link.svg" alt="A link symbol" />
              <img src="../assets/vector/link.svg" alt="A link symbol" />
              <img src="../assets/vector/arrow.svg" alt="A link symbol" />
              <img src="../assets/vector/link.svg" alt="A link symbol" />
            </div>
            <p>
              Seamlessly transform your long URLs into concise <br />
              and shareable links with just few clicks.
            </p>
          </div>
          <div class="ash">
            <img src="../assets/vector/ash.svg" alt="background image" />
          </div>

          <div class="trapezium-container">
            <img
              class="trapezium"
              src="../assets/vector/trapezium.svg"
              alt="rectanglar design"
            />
            <img
              class="ellipse"
              src="../assets/vector/ellipse.svg"
              alt="reactanglar design"
            />
          </div>
        </section>

        <section class="part-three">
          <div class="onestop-bg-color">
            <div class="onestop-line-container">
              <div class="onestop">
                <h2>One Stop. <br />Four <span>Possibilities.</span></h2>
              </div>
              <div class="test">
                <div class="three-m">
                  <p>3M</p>
                  <p>Active users</p>
                </div>

                <div class="sixty-m">
                  <p>60M</p>
                  <p>Links & QR <br />codes created</p>
                </div>
                <div class="one-b">
                  <p>1B</p>
                  <p>
                    Clicked & Scanned<br />
                    connections
                  </p>
                </div>
                <div class="three-hundred-k">
                  <p>300k</p>
                  <p>App Integrations</p>
                </div>
              </div>
            </div>
          </div>
          <div class="why-choose-main-container">
            <div class="why-choose-container">
              <div style="display: flex; column-gap: 0.5rem">
                <div class="line-70">
                  <img src="../assets/vector/line70.svg" alt="" />
                </div>
                <div style="padding-top: 8px">
                  <h2>Why choose <span>Scissors</span></h2>
                </div>
              </div>
              <div style="padding-left: 20px; padding-right: 20px">
                <p>
                  Scissors is the hub of everything that has to do with your
                  link management. We shorten your URLs, allow you creating
                  custom ones for your personal, business, event usage. Our
                  swift QR code creation, management and usage tracking with
                  advance analytics for all of these is second to none.
                </p>
              </div>
            </div>

            <div class="main-icon-section-cover">
              <div class="icon-section-cover add-margin">
                <div>
                  <div class="icon-cover">
                    <img src="../assets/vector/link-2.svg" alt="" />
                  </div>
                  <h3>URL Shortening</h3>
                  <p>
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </p>
                </div>
                <div>
                  <div class="icon-cover">
                    <img src="../assets/vector/edit.svg" alt="" />
                  </div>
                  <h3>Custom URLs</h3>
                  <p>
                    With Scissor, you can create custom URLs, with the length
                    you want! A solution for socials and businesses.
                  </p>
                </div>
              </div>
              <div class="icon-section-cover">
                <div>
                  <div class="icon-cover">
                    <img src="../assets/vector/grid.svg" alt="" />
                  </div>
                  <h3>QR Codes</h3>
                  <p>
                    Generate QR codes to your business, events. Bring your
                    audience and customers to your doorstep with this scan and
                    go solution.
                  </p>
                </div>
                <div>
                  <div class="icon-cover">
                    <img src="../assets/vector/activity.svg" alt="" />
                  </div>
                  <h3>Data Analytics</h3>
                  <p>
                    Receive data on the usage of either your shortened URL,
                    custom URLs or generated QR codes. Embedded to monitor
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="part-four" id="pricing">
          <div class="price-perfect-main-conatiner" id="pricing">
            <div class="line70-section">
              <div class="line-70">
                <img src="../assets/vector/line70.svg" alt="" />
              </div>
              <div style="padding-top: 5px">
                <h2>Why choose <span>A price perfect</span> for your needs.</h2>
                <p>
                  From catering for your personal, business, event, socials
                  needs, you can be rest assured <br />
                  we have you in mind in our pricing.
                </p>
              </div>
            </div>
            <div class="subscription-container">
              <div class="basic-container">
                <div class="basic"><p>Basic</p></div>
                <div><h2>Free</h2></div>
                <div><p>Free plan for all users</p></div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Unlimited URL Shortening</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Basic Link Analytics</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Customizable Short Links</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Standard Support</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Ad-supported</p>
                </div>
              </div>

              <div class="basic-container professional-container">
                <div class="basic"><p>Professional</p></div>
                <div><h2>$15/month</h2></div>
                <div><p>Ideal for business creators</p></div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle-white.svg"
                    alt="check image"
                  />
                  <p>Enhanced Link Analytics</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle-white.svg"
                    alt="check image"
                  />
                  <p>Custom Branded Domains</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle-white.svg"
                    alt="check image"
                  />
                  <p>Advanced Link Customization</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle-white.svg"
                    alt="check image"
                  />
                  <p>Priority Support</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle-white.svg"
                    alt="check image"
                  />
                  <p>Ad-free Experience</p>
                </div>
              </div>

              <div class="team-container">
                <div class="basic"><p>Team</p></div>
                <div><h2>$25/month</h2></div>
                <div><p>Share with up to 10 users</p></div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Team Collaboration</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>User Roles and Permissions</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Enhanced Security</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>API Access</p>
                </div>
                <div class="check-icon-container">
                  <img
                    src="../assets/vector/check-circle.svg"
                    alt="check image"
                  />
                  <p>Dedicated Account Manager</p>
                </div>
              </div>
            </div>
            <div class="pricing-button">
              <button class="no-bg-color">Get Custom Pricing</button>
              <button>Select Pricing</button>
            </div>
          </div>
        </section>

        <ShortenUrl id="myurls"  class="shortenUrl"/>

        <FAQ id="faq"></FAQ>

        <section class="part-seven">
          <div class="Revolutionizing">
            <div>
              <h2>Revolutionizing Link Optimization</h2>
            </div>
            <div><button>Get Started</button></div>
            <div class="group5">
              <img src="../assets/vector/group5.svg" alt="background image" />
            </div>
            <div class="group6">
              <img src="../assets/vector/group6.svg" alt="background image" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section class="part-eight">
          <div class="footer-main-container">
            <div class="logo-and-social-container">
              <div>
                <h3 class="header-title footer-title">
                  <span class="header-title-icon1">
                    <img src="../assets/vector/footer-link.svg" alt=""
                  /></span>
                  <span class="header-title-icon2">
                    <img src="../assets/vector/footer-line.svg" alt=""
                  /></span>
                  <span class="scissor-footer"><a href="#"> scissor</a></span>
                </h3>
                <div class="social-icons">
                  <a href="https://twitter.com"
                    ><img
                      src="../assets/vector/social-icon/twitter.svg"
                      alt="twitter"
                  /></a>
                  <a href="https://instagram.com"
                    ><img
                      src="../assets/vector/social-icon/instagram.svg"
                      alt="instagram"
                  /></a>
                  <a href="https://linkedin.com"
                    ><img
                      src="../assets/vector/social-icon/linkedin.svg"
                      alt="linkedin"
                  /></a>
                  <a href="https://facebook.com">
                    <img
                      src="../assets/vector/social-icon/facebook.svg"
                      alt="facebook"
                  /></a>
                </div>
              </div>
            </div>
            <div class="footer-items">
              <div class="from-why-scissor">
                <p style="font-weight: bold"><a href="#"> Why Scissor ?</a></p>
                <p>
                  <a href="#"> Scissor 101</a>
                  <a href="#"> Integrations & API?</a> <br />
                  <a href="#"> Pricing?</a>
                </p>
              </div>
              <div class="solutions">
                <p style="font-weight: bold"><a href="#"> Solutions ? </a></p>
                <p>
                  <a href="#"> Social Media</a> <br />
                  <a href="#"> Digital Marketing</a> <br />
                  <a href="#"> Customer Service</a> <br />
                  <a href="#"> For Developers</a>
                </p>
              </div>
              <div class="products">
                <p style="font-weight: bold"><a href="#"> Products</a></p>
                <p>
                  <a href="#"> Link Management</a> <br />
                  <a href="#"> QR Codes</a> <br />
                  Link-in-bio
                </p>
              </div>
              <div class="company">
                <p style="font-weight: bold"><a href="#"> Company</a></p>
                <p>
                  <a href="#"> About Scissor</a> <br />
                  <a href="#"> Careers</a> <br />
                  <a href="#"> Partners</a> <br />
                  <a href="#"> Press</a> <br />
                  <a href="#">Contact</a> <br />
                  <a href="#">Reviews</a>
                </p>
              </div>
              <div class="feature">
                <p style="font-weight: bold"><a href="#">Resources</a></p>
                <p>
                  <a href="#">Blog</a> <br />
                  <a href="#">Resource Library</a> <br />
                  <a href="#">Developers</a> <br />
                  <a href="#">App Connectors</a> <br />
                  <a href="#">Support</a> <br />
                  <a href="#">Trust Center</a> <br />
                  <a href="#">Browser Extension</a> <br />
                  <a href="#">Mobile App</a>
                </p>
              </div>
              <div class="feature">
                <p style="font-weight: 900"><a href="#">Features </a></p>
                <p>
                  <a href="#">Branded Links</a><br />
                  <a href="#">Mobile Links</a><br />
                  <a href="#">Campaign</a><br />
                  <a href="#">Management &</a><br />
                  <a href="#">nalytics</a><br />
                  <a href="#">QR Code generation</a>
                </p>
              </div>
              <div class="legal">
                <p style="font-weight: bold"><a href="#">Legal</a></p>
                <p>
                  <a href="#">Blog</a> <a href="#">Privacy Policy</a> <br />
                  <a href="#">Cookie Policy</a> <br />
                  <a href="#">Terms of Service</a> <br />
                  <a href="#">Acceptable Use Policy</a><br />
                  <a href="#">Code of Conduct</a>
                </p>
              </div>
            </div>

            <div class="group7">
              <img src="../assets/vector/group7.svg" alt="background image" />
            </div>
            <div class="group8">
              <img src="../assets/vector/group8.svg" alt="background image" />
            </div>
          </div>
        </section>
      </footer>
    </body>
  </div>
</template>

<script setup lang="ts">
import "../styles/Home.css";
import FAQ from "../components/Faq.vue";
import ShortenUrl from "../components/ShortenUrl.vue";
import router from "../router/index";
</script>
