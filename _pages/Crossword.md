---
title: Crossword
permalink: /crossword.html
published: true
---
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Money Matters</title>
        <meta name="generator" content="EclipseCrossword"/>
		<link rel="stylesheet" href="{{site.baseurl}}/assets/css/crossword.css">
        
       
        
    </head>
    <body>
        <h1>Money Matters</h1>
      <!--- <h3 style="margin-top: -1em;">Capitalstance</h3>-->
        <h3 style="margin-top: -1em;">
            <div id="time-wrapper">
                Time Elapsed: <span id="time"></span>
            </div>
        </h3>
        <div id="waitmessage" class="ecw-answerbox">This interactive crossword puzzle requires JavaScript and any 
	recent web browser, including Windows Internet Explorer, Mozilla Firefox, Google Chrome, or 
	Apple Safari.  If you have disabled web page scripting, please re-enable it and refresh
	the page.  If this web page is saved on your computer, you may need to click the yellow Information Bar at the top or bottom of
	the page to allow the puzzle to load.
</div>
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
				<div class="area">
					<td onclick="startTimer()" class="ecw-crosswordarea">
						<script src="{{site.baseurl}}/assets/js/test.js"></script>
					</div>


                <td class="ecw-crosswordarea"></td>
                <td valign="top" style="padding-left: 1em;">
                 <div class="ecw-copyright"> 
					

                        <!--<a href="http://www.eclipsecrossword.com/" onclick="this.target='_blank'" style="font-weight: bold;">EclipseCrossword</a>
                        &copy;2000-2013-->

                    </div> 

					<div id="welcomemessage" class="ecw-answerbox" style="display:none;">
                        <h3>Welcome!</h3>
                        <p>Click a word in the puzzle to get started.</p>
                    </div>
                    <div id="answerbox" class="ecw-answerbox" style="display:none;">
                        <h3 id="wordlabel" class="ecw-wordlabel">&nbsp;</h3>
                        <div id="wordinfo" class="ecw-wordinfo"></div>
                        <div id="wordclue" class="ecw-cluebox"></div>
                        <div style="margin-top: 1em;">
                            <input class="ecw-input" id="wordentry" type="text" size="26" style="font-weight: bold; text-transform:uppercase;" onkeypress="WordEntryKeyPress(event)" onchange="WordEntryKeyPress(event)"/>
                        </div>
                        <div id="worderror" class="ecw-worderror"></div>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin-top:1em;">
                            <tbody>
                                <tr>
                                    
                                    <td >
                                        <button id="okbutton" type="button" class="ecw-input ecw-button" onclick="OKClick();" style="font-weight: bold;">OK</button>
                                        &nbsp;<button id="cancelbutton" type="button" class="ecw-input ecw-button" onclick="DeselectCurrentWord();">Cancel</button>
                                    </td>
									<td>
                                        <button id="cheatbutton" type="button" class="ecw-input ecw-button" onclick="CheatClick();">Solve</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
						
                    </div>
					<div style="margin-top: 1em;">
						<button id="checkbutton" type="button" class="ecw-button" onclick="CheckClick();" style="display: none;">Check puzzle</button>
						</div>
                    <div id="congratulations" class="ecw-answerbox" style="display:none;">
                        <h3>Congratulations!</h3>
                        <p>
                            You have completed this <a href="http://www.eclipsecrossword.com" style="color: black; text-decoration:none;">crossword puzzle</a>
                            .

                        </p>
                        <p>
                            If you would like to be able to create interactive
<a href="http://www.eclipsecrossword.com" style="color: black; text-decoration:none;">crosswords</a>
                            like this yourself, get <a href="http://www.eclipsecrossword.com" onclick="this.target='_blank'">EclipseCrossword</a>
                            from Green Eclipse &mdash;it's free!

                        </p>
                    </div>
                </td>
			</div>
            </tr>
        </table>
        
        
        <script src="{{site.baseurl}}/assets/js/time.js"></script>
        <script src="{{site.baseurl}}/assets/js/test.js"></script>
        
        <!-- Created with EclipseCrossword, (C) Copyright 2000-2013 Green Eclipse.  eclipsecrossword.com -->
        <script>
            // Step 1: Find the script tag that links to the test.js file
            const scriptTag = document.querySelector('script[src="test.js"]');

            // Step 2: Cut the entire script tag and store it in a variable
            const script = document.createElement('script');
            script.src = 'test.js';

            // Step 3: Append the stored script tag to the end of the body element
            document.body.appendChild(script);

            // Remove the original script tag from the DOM
            scriptTag.remove();
        </script>
    </body>
</html>
