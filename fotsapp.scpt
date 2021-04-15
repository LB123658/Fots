display dialog "Sign into FotsApp with your Apple Id" default answer "" buttons {"Sign in"}
set p to the text returned of the result
if p = "password" then
	display dialog "Password verified." buttons {"Continue"}
	display dialog "Opening FotsApp" buttons {"Open"}
	display dialog "Fots = food + shots. Fots are crunchy and dry. Fots are never wet unless it is an olive Fot which is made of crushed olives. Fots are typically a dried ingredient crushed to a pulp drank out of a shot, or Fot, glass. Fot glasses are pretty small but Fots have BIIIIGGGG flavor. Zilch it to a fot. This app is FotsApp. For more information about Fots, visit the official Fots website, email Fots, or subscribe to Fots on YouTube." buttons {"Fots", "Email"}
	set button to the button returned of the result
	if button = "Fots" then
		tell application "Safari"
			open location "https://lb123658.github.io/Fots/"
		end tell
	else
		tell application "Mail"
			display dialog "Email us at fotsofficial671@gmail.com"
			open location "mailto:fotsofficial671@gmail.com"
		end tell
		
	end if
else
	display dialog "Incorrect password" buttons {"Close"}
end if
