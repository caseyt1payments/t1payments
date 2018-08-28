<?php

         $to = "web@adlava.com";
         $subject = "Demo Support Notification";

         $message .= "<h1>Thanks for contacting with us....</h1><br>";
         $message .=  "Name:". $_POST['username']."<br>
                      Email:". $_POST['useremail']."<br>
                      Phone:". $_POST['userphone']."<br>
                      Message:". $_POST['supportuser']."<br>";

         $header = "From:". $_POST['hiddenadminemail']." \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";

         $retval = mail ($to,$subject,$message,$header);
          if( $retval == true ) {
           echo "Message sent successfully...";
          }

?>
