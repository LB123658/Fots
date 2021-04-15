set name_list to {"fotted"}
tell application "SpeechRecognitionServer"
	set your_name to listen for name_list with prompt "Finish this Fot phrase. Excuse me, I..."
	say "I also " & your_name
	set theResponse to listen for {"yes", "no"} with prompt "I am the Fots virtual assistant. Do you want me to tell you about fots?"
	if theResponse = "yes" then
		say "The word fot is a combination of food and shot, because a Fot is a shot of food in a fot glass. Fots are dry food crushed to a pulp, for example dry cereal or rice crispys, that you drink out of a fot glass. They are delicious."
	else
		say "Ok. I will not tell you a story about Fots. Maybe another time though.  You are very mean. I really wanted to tell you a story. I'm gonna zilch you to a fot one day! I am going to start anoyying you. Let's see how anoying I can be. I think it is really fun to repeat tongue twisters over and over and see how long people can stand me talking. Red leather yellow leather Red leather yellow leather Red leather yellow leather Red leather yellow leather Red leather yellow leather Red leather yellow leather Unique New York Unique New York. Unique New York Unique New York Unique New York Unique New York Unique New York Unique New York Unique New York Unique New York Unique New York. I know you will never be as good as I am at toung twisters because I an a computer. I am smarter. I can see you right now. You are in front of your computer."
	end if
end tell
say "Ok bye. I will be leaving now."
