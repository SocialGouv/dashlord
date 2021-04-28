
# ZAP Scanning Report

Generated on Wed, 28 Apr 2021 21:31:28


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 6 |
| Low | 6 |
| Informational | 7 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| PII Disclosure | High | 1 | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Cross-Domain Misconfiguration | Medium | 1 | 
| Reverse Tabnabbing | Medium | 11 | 
| Source Code Disclosure - Perl | Medium | 1 | 
| Sub Resource Integrity Attribute Missing | Medium | 8 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Cross-Domain JavaScript Source File Inclusion | Low | 9 | 
| Dangerous JS Functions | Low | 12 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Strict-Transport-Security Header Not Set | Low | 4 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 13 | 
| Modern Web Application | Informational | 11 | 
| Retrieved from Cache | Informational | 12 | 
| Storable but Non-Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 14 | 
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 12 | 

## Alert Detail


  
  
  
  
### PII Disclosure
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://beta.gouv.fr/content/docs/StateStartups-Foucaud.pdf](https://beta.gouv.fr/content/docs/StateStartups-Foucaud.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `5001000444444333333`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Maestro</p><p>Bank Identification Number: 500100</p><p>Brand: MAESTRO</p><p>Category: </p><p>Issuer: </p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
* http://www.w3.org/TR/CSP/
* http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* http://caniuse.com/#feat=contentsecuritypolicy
* http://content-security-policy.com/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cross-Domain Misconfiguration
##### Medium (Medium)
  
  
  
  
#### Description
<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>
  
  
  
* URL: [https://beta.gouv.fr/api/v1.7/startups.csv](https://beta.gouv.fr/api/v1.7/startups.csv)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>
  
### Other information
<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>
  
### Reference
* http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html

  
#### CWE Id : 264
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-link fr-fi-external-link-line fr-link--icon-right" href="https://doc.incubateur.net" title="Documentation" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Source Code Disclosure - Perl
##### Medium (Medium)
  
  
  
  
#### Description
<p>Application Source Code was disclosed by the web server - Perl</p>
  
  
  
* URL: [https://beta.gouv.fr/content/docs/rapportannuel.pdf](https://beta.gouv.fr/content/docs/rapportannuel.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `$#fGIEh`
  
  
  
  
Instances: 1
  
### Solution
<p>Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. </p>
  
### Other information
<p>$#fGIEh</p>
  
### Reference
* http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/

  
#### CWE Id : 540
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' nomodule src='https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' nomodule src='https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' type='text/css' href='https://d33wubrfki0l68.cloudfront.net/bundles/c3543aeb60707e2656df1f42201a7ae4949b4bcd.css'/>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='module' src='https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='text/javascript' src='https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<script type='module' src='https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel='stylesheet' type='text/css' href='https://d33wubrfki0l68.cloudfront.net/bundles/09d286a2f3f4c3e7292be1469e6bb284826c7104.css'/>`
  
  
  
  
Instances: 8
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/contact/](https://beta.gouv.fr/contact/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js`
  
  
  * Evidence: `<script type='text/javascript' src='https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js`
  
  
  * Evidence: `<script type='text/javascript' nomodule src='https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js`
  
  
  * Evidence: `<script type='text/javascript' src='https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js`
  
  
  * Evidence: `<script type='text/javascript' src='https://d33wubrfki0l68.cloudfront.net/js/0f62d6c2c169e85fe272b16c7673aeed5009161c/assets/additional/js/lozad.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js`
  
  
  * Evidence: `<script type='module' src='https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js`
  
  
  * Evidence: `<script type='text/javascript' nomodule src='https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js`
  
  
  * Evidence: `<script type='module' src='https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js`
  
  
  * Evidence: `<script type='text/javascript' nomodule src='https://d33wubrfki0l68.cloudfront.net/js/2221bb3459bcbe993b4165e4239721b835da037d/assets/gouvfr/js/dsfr.nomodule.min.js'></script>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js`
  
  
  * Evidence: `<script type='module' src='https://d33wubrfki0l68.cloudfront.net/js/b8fcb6f7d29a9cf5497b26b4ab17c3f90d049747/assets/gouvfr/js/dsfr.module.min.js'></script>`
  
  
  
  
Instances: 9
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=latelier.numerique.du.ministere.de.leurope.et.des.affaires.etrangeres](https://beta.gouv.fr/startups/?incubateur=latelier.numerique.du.ministere.de.leurope.et.des.affaires.etrangeres)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=fabnumdef](https://beta.gouv.fr/startups/?incubateur=fabnumdef)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=mtes](https://beta.gouv.fr/startups/?incubateur=mtes)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=lab-mi](https://beta.gouv.fr/startups/?incubateur=lab-mi)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=apigouv](https://beta.gouv.fr/startups/?incubateur=apigouv)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=anct](https://beta.gouv.fr/startups/?incubateur=anct)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=bercy](https://beta.gouv.fr/startups/?incubateur=bercy)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=mission-apprentissage](https://beta.gouv.fr/startups/?incubateur=mission-apprentissage)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=culture](https://beta.gouv.fr/startups/?incubateur=culture)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=dinum](https://beta.gouv.fr/startups/?incubateur=dinum)
  
  
  * Method: `GET`
  
  
  * Evidence: `Eval`
  
  
  
  
Instances: 12
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/contact/](https://beta.gouv.fr/contact/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `public, max-age=0, must-revalidate`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://beta.gouv.fr/startups/%5C%22%7Burl%7D%5C%22](https://beta.gouv.fr/startups/%5C%22%7Burl%7D%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/%5C%22%7Burl%7D%5C%22](https://beta.gouv.fr/%5C%22%7Burl%7D%5C%22)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html
* https://owasp.org/www-community/Security_Headers
* http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
* http://caniuse.com/stricttransportsecurity
* http://tools.ietf.org/html/rfc6797

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/contact/](https://beta.gouv.fr/contact/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://beta.gouv.fr/startups/demarches-simplifiees.fr.html](https://beta.gouv.fr/startups/demarches-simplifiees.fr.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/profile_images/803636352348725248/c_j2qY7f_400x400`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/annuaire](https://beta.gouv.fr/communaute/annuaire)
  
  
  * Method: `GET`
  
  
  * Evidence: `A7ois-xavier-montigny-36290920/`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation/mooc/sequence-3-mesurer-impact.html](https://beta.gouv.fr/approche/formation/mooc/sequence-3-mesurer-impact.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `/content/docs/mooc/15-impact-Maintenant-pole-emploi`
  
  
  
  
* URL: [https://beta.gouv.fr/accessibilite/](https://beta.gouv.fr/accessibilite/)
  
  
  * Method: `GET`
  
  
  * Evidence: `fr/uploads/DINUM_SchemaPluriannuel_2020`
  
  
  
  
* URL: [https://beta.gouv.fr/assets/images/favicons/safari-pinned-tab.svg](https://beta.gouv.fr/assets/images/favicons/safari-pinned-tab.svg)
  
  
  * Method: `GET`
  
  
  * Evidence: `org/TR/2001/REC-SVG-20010904/DTD/svg10`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/recrutement/2021/02/10/developpeur-full-stack-SignalConso`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2Fpaquet-mobilite-soutien-a-l-accord-conclu-avec-les-ministres-de-l-ue`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `MmE2NTZkNWQ0MGQ0Y2IzOWQyZTllOWUxZGI2OWJhMTM2OTJhMDRjNzJjYjM5NWQ4MTRkM2UwNmRlYzBjM2RiYg==`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=anct](https://beta.gouv.fr/startups/?incubateur=anct)
  
  
  * Method: `GET`
  
  
  * Evidence: `2Fpaquet-mobilite-soutien-a-l-accord-conclu-avec-les-ministres-de-l-ue`
  
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Evidence: `2Fpaquet-mobilite-soutien-a-l-accord-conclu-avec-les-ministres-de-l-ue`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/transport.html](https://beta.gouv.fr/startups/transport.html)
  
  
  * Method: `GET`
  
  
  * Evidence: `com/profile_images/880846387717472256/BdMvDErL_400x400`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>r����\x001f�W��f�z���~��~vߏ;۝���?�j�����Lx�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=apigouv](https://beta.gouv.fr/startups/?incubateur=apigouv)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Evidence: `admin`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=anct](https://beta.gouv.fr/startups/?incubateur=anct)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=apigouv](https://beta.gouv.fr/startups/?incubateur=apigouv)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=bercy](https://beta.gouv.fr/startups/?incubateur=bercy)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=anct](https://beta.gouv.fr/startups/?incubateur=anct)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=bercy](https://beta.gouv.fr/startups/?incubateur=bercy)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=culture](https://beta.gouv.fr/startups/?incubateur=culture)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://beta.gouv.fr/startups](https://beta.gouv.fr/startups)
  
  
  * Method: `GET`
  
  
  * Evidence: `DB`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=culture](https://beta.gouv.fr/startups/?incubateur=culture)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
Instances: 13
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bSELECT\b and was detected in the element starting with: "<script></p><p>    if (typeof (String.prototype.trim) === "undefined") {</p><p>        String.prototype.trim = function () {</p><p>            ret", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-sidemenu__link" href="/approche/" target="_self">Notre approche</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="/startups/sante-psy-etudiant.html" class="fr-tag fr-tag--sm" target="_self">Santé Psy Etudiant</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="fr-sidemenu__link" href="/approche/" target="_self">Notre approche</a>`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="" class="fr-footer__top-link">
                  <svg class="icon icon-"><use xlink:href="#icon-"></use></svg>
                </a>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 2`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 1227`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 4412`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 1`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 4410`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 1`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 2`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
Instances: 12
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Other information
<p>The presence of the 'Age' header indicates that that a HTTP/1.1 compliant caching server is in use.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
  
### Storable but Non-Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users. </p>
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/en/](https://beta.gouv.fr/en/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
* URL: [https://beta.gouv.fr/dashboard/](https://beta.gouv.fr/dashboard/)
  
  
  * Method: `GET`
  
  
  * Evidence: `max-age=0`
  
  
  
  
Instances: 11
  
### Solution
<p></p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://beta.gouv.fr/ficheproduit](https://beta.gouv.fr/ficheproduit)
  
  
  * Method: `GET`
  
  
  * Evidence: `14609010`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608710`
  
  
  
  
* URL: [https://beta.gouv.fr/recrutement/](https://beta.gouv.fr/recrutement/)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608855`
  
  
  
  
* URL: [https://beta.gouv.fr/robots.txt](https://beta.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608611`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `20753000`
  
  
  
  
* URL: [https://beta.gouv.fr/sitemap.xml](https://beta.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608640`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/formation](https://beta.gouv.fr/approche/formation)
  
  
  * Method: `GET`
  
  
  * Evidence: `14609043`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608607`
  
  
  
  
* URL: [https://beta.gouv.fr/communaute/](https://beta.gouv.fr/communaute/)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608741`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `33275800`
  
  
  
  
* URL: [https://beta.gouv.fr/approche/](https://beta.gouv.fr/approche/)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608654`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `00536261`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/](https://beta.gouv.fr/startups/)
  
  
  * Method: `GET`
  
  
  * Evidence: `25201000`
  
  
  
  
* URL: [https://beta.gouv.fr/](https://beta.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `14608132`
  
  
  
  
Instances: 14
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>14609010, which evaluates to: 1970-06-19 02:03:30</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### User Controllable HTML Element Attribute (Potential XSS)
##### Informational (Low)
  
  
  
  
#### Description
<p>This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.</p>
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=culture](https://beta.gouv.fr/startups/?incubateur=culture)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=fabnumdef](https://beta.gouv.fr/startups/?incubateur=fabnumdef)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=culture](https://beta.gouv.fr/startups/?incubateur=culture)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=culture](https://beta.gouv.fr/startups/?incubateur=culture)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=dinum](https://beta.gouv.fr/startups/?incubateur=dinum)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=latelier.numerique.du.ministere.de.leurope.et.des.affaires.etrangeres](https://beta.gouv.fr/startups/?incubateur=latelier.numerique.du.ministere.de.leurope.et.des.affaires.etrangeres)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=bercy](https://beta.gouv.fr/startups/?incubateur=bercy)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=mission-apprentissage](https://beta.gouv.fr/startups/?incubateur=mission-apprentissage)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=lab-mi](https://beta.gouv.fr/startups/?incubateur=lab-mi)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=apigouv](https://beta.gouv.fr/startups/?incubateur=apigouv)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=mtes](https://beta.gouv.fr/startups/?incubateur=mtes)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
* URL: [https://beta.gouv.fr/startups/?incubateur=anct](https://beta.gouv.fr/startups/?incubateur=anct)
  
  
  * Method: `GET`
  
  
  * Parameter: `incubateur`
  
  
  
  
Instances: 12
  
### Solution
<p>Validate all input and sanitize output it before writing to any HTML attributes.</p>
  
### Other information
<p>User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:</p><p></p><p>https://beta.gouv.fr/startups/?incubateur=culture</p><p></p><p>appears to include user input in: </p><p></p><p>a(n) [section] tag [id] attribute </p><p></p><p>The user input found was:</p><p>incubateur=culture</p><p></p><p>The user-controlled value was:</p><p>culture</p>
  
### Reference
* http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute

  
#### CWE Id : 20
  
#### WASC Id : 20
  
#### Source ID : 3
