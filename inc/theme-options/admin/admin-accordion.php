<?php
        ?>
<div id="accordion">
  <h3>Site Support</h3>
  <div>
      <div class="emailsuccess" style="display:none;">Email sent successfully..</div><br>
      <input type="hidden" name="site_name" value="<?php bloginfo('name'); ?>" id="hiddensitename">
      <input type="hidden" name="site_url" value="<?php echo site_url(); ?>" id="hiddensiteurl">
      <input type="hidden" name="adminemail" value="<?php bloginfo('admin_email'); ?>" id="hiddenadminemail">
      <div><label>Name :</label> <input class="code req"  type="text" name="name" value="" placeholder="Name" id="nameuser"> </div>
      <div><label>Email :</label> <input class="code req"  type="email" name="email" value="" placeholder="Email" id="emailuser"></div>
      <div><label>Phone :</label> <input class="code req" type="text" name="phone" value="" placeholder="Phone" id="phoneuser"> </div>
      <div><label>Support Request Details :</label> <textarea placeholder="Support Request" name="support" rows="7" cols="40" id="supportuser"></textarea> </lebel></div>
      <div><input type="button" name="save" value="Send" id="emailsubmit"></div>

  </div>
  <h3>WordPress Dashboard Overview</h3>
  <div>
    <p>The Dashboard tells you about recent activity both at your site and in the WordPress community
at large and provide access to updating WordPress, plugins, and themes. </p>

<p>The first page you see after logging in is called the Dashboard, a collection of information and
data about the activities and actions on your WordPress site. </p>

<p>The Dashboard helps to keep you up to date on new and interesting bits of information from the
many WordPress resources. In the corner it also features a list of the most recent activity you’ve
accomplished on your site</p>
  <img src="<?php echo get_template_directory_uri();?>/images/image.AW3IEY.png">
  <p>On the left side of the screen is the main navigation menu detailing each of the administrative
functions you can perform. Move your mouse down the list and the sub­menus will “fly out” for
you to move your mouse to and click. Once you choose a “parent” navigation section, it will
open up to reveal the options within that section. </p>
<p>The various menu items that come out­of­the­box with WordPress are as follows:</p>
<span>Dashboard </span>
<span>Posts </span>
<span>Media </span>
<span>Links </span>
<span>Pages </span>
<span>Comments </span>
<span>Appearance </span>
<span>Plugins </span>
<span>Users </span>
<span>Tools </span>
<span>Settings </span>
  </div>
  <h3>Posts, Pages & Custom Post Types</h3>
  <div>
    <p>The WordPress Content Architecture is comprised of “post types”.  Post Types are essentially
types of content that are organized and structured based off of their usage and intentions.
WordPress comes out­of­the­box with Posts and Pages as the two primary content types for
your use.  If your website projects’ Content Architecture deemed it necessary to venture outside
of the standard Posts and Pages, our Development will have created Custom Post Types
catered to your needed types of content.  They are edited the same as the native WordPress
Posts and Pages, often with additional (or removed) editable content areas within the post edit
screen. </p>

<b>Add New Post </b>
<p>The most important part of WordPress, the Posts Add New Screen is where you write new
Posts. While you are writing those Posts, you can also create new Categories and new Tags. In
addition, any Media (pictures, video, recordings, files) can be uploaded and inserted into the
Posts. </p>

<b>Categories </b>
<p>Every Post in WordPress is filed under one or more Categories. Categories allow the
classification of your Posts into groups and subgroups, thereby aiding viewers in the navigation
and use of your site. </p>

<p>Each Category may be assigned to a Category Parent so that you may set up a hierarchy within
the category structure. Using automobiles as an example, a hierarchy might be
Car­>Ford­>Mustang. In creating categories, recognize that each category name must be
unique, regardless of hierarchy. </p>

<p>The Posts Categories Screen allows you to add, edit, and delete Categories, as well as
organize your categories hierarchically. Multiple Categories can be selected for deletion. A
search option allows you to find the Categories you want to edit or delete. Also remember
Categories can be added in the Posts Add New Screen. </p>

<b>Tags </b>
<p>Tags are the keywords you might assign to each post. Not to be confused with Categories, Tags
have no hierarchy, meaning there's no relationship from one Tag to another. But like
Categories, Tags provide another means to aid your readers in accessing information on your
blog. The Posts Tags Screen allows you to add, change, or delete Tags. Multiple Tags can be
selected for deletion. A search option allows you to find the Tags you want to edit or delete. Also
remember Tags can be added in the Posts Add New Screen. </p>

<b>All Pages </b>
<p>The All Pages Screen provides the necessary tools to edit, delete or view existing Pages. On
this Screen you can select the Page to edit, delete or view. Multiple Pages can be selected for
deletion and for editing. As with Posts, a powerful bulk edit tool allows certain fields to be edited
for a whole group of Pages. A handy in­line edit tool, called Quick Edit, allows you to update
many fields for an individual Page. Various search and filtering options allow you to find the
Pages you want to edit or delete. </p>

<p>One primary difference between posts and pages, is that natively, Pages do not include
Categories or Tags ­ though they can if your Content Architecture deemed it necessary.  The
same is true for Custom Post Types that we may have added to your site. </p>

<b>Add New Page </b>
<p>The Add New Page Screen allows you to create new Pages. Pages operate similar inside
WordPress as Posts. </p>
</div>
  <h3>Managing Comments ­ Blog Reader Feedback</h3>
  <div>
    <p>Comments are a feature of blogs which allow readers to respond to Posts. Typically readers
simply provide their own thoughts regarding the content of the post, but users may also provide
links to other resources, generate discussion, or simply compliment the author for a well­written
post. </p>

<p>Comments can be controlled and regulated through the use of filters for language and content,
and often times can be queued for approval before they are visible on the web site. This is
useful in dealing with comment spam. </p>

<p>In the Comments Screen you can edit and delete as well as mark comments as spam.
Comments that are awaiting moderation can be marked as approved or previously approved
comments can be unapproved. Multiple comments can be selected and approved, marked as
spam, unapproved, or deleted. A section at the top of the Comments Screen displays the
number of comments awaiting moderation and the number of approved comments. A search
box allows you to find specific comments </p>
  </div>

   <h3>Image Resizing & Cropping</h3>
  <div>
    <p>If you ever feel the need to add an image, or swap out an editable image on your site, please
know that your website was designed with specific intended images, image sizes and image
ratios in mind.  That being said, image upload sections within your site’s pages and posts will have the specifications so you may follow them when making changes to dynamic images on
your site.  If you’ve never resized or cropped an image before, we will share some resources
below to help you get the hang of it. </p>

<p>The first thing you will need is an image editing tool (for resizing and cropping).  We recommend
using Adobe Illustrator or Photoshop.  If you do not have either of those premium image editing
tools, you may download GIMP and use that one.  GIMP is a very simplified open­source image
editing tool, somewhat like Photoshop. GIMP is available for free on Mac, Windows and Linux.
If you aren’t proficient in Photoshop or GIMP, installing GIMP only takes a minute or two, and
we’ve included some YouTube videos below that will have you cropping & resizing images in
GIMP in no time. </p>
<h5>GIMP Resources </h5>
<a href="https://www.gimp.org/downloads/" target="_blank">GIMP Download Link </a>
<a href="https://www.youtube.com/watch?v=QOxDbTAZR2o" target="_blank">GIMP Lesson 1: Opening an Image File </a>
<a href="https://www.youtube.com/watch?v=Fvw7q1BrFZ4" target="_blank">GIMP Lesson 2: Resizing an Image File </a>
<a href="https://docs.gimp.org/en/gimp-tutorial-quickie-crop.html" target="_blank">GIMP Lesson 3: [DOCUMENT] GIMP Cropping 101 </a>
<a href="https://www.youtube.com/watch?v=hedziBfIDUY" target="_blank">GIMP Lesson 3: Cropping an Image File </a>
<a href="https://www.youtube.com/watch?v=qqG0P1oT_OM" target="_blank">GIMP Lesson 4: Saving and/or Exporting in GIMP</a>
<a href="https://www.youtube.com/watch?v=L46gthZJlb8" target="_blank">GIMP Lesson 5: More on Cropping & Resizing with GIMP</a>
<p>There are plenty of other tools online that you can research and use if you prefer.
Unfortunately, the only free tool that we feel comfortable recommending is GIMP, but any image
editing tool you are comfortable with should be fine to use.</p>
  </div>
</div>
