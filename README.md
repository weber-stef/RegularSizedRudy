# RegularSizedRudy
This is the attempt to build a very basic Jooml3 template from scratch.

The Less files are compiled by node through the script "nuabba", which is defined in the package.json, after npm install -g lessc-each was executed to have the possibility to compile whole less folders to their css equivalents at once.

I also changed some Links in the navigation in phpmyadmin. the queries I used were:

UPDATE `jml_menu` SET `title` = REPLACE(`title`, 'Multimedia', 'Web')
UPDATE `jml_menu` SET `title` = REPLACE(`title`, 'Sounddesign | Komposition', 'Audio')
UPDATE `jml_menu` SET `title` = REPLACE(`title`, 'Printdesign', 'Print')
UPDATE `jml_menu` SET `title` = REPLACE(`title`, '3D-Arbeiten', '3D')

Montag, 12. Juli 2021 22:30:54

pure css Dropdown-menu  ready, by following https://www.youtube.com/watch?v=rgUp302f_lY - How to Create an HTML Dropdown Menu | Learn HTML and CSS | HTML Tutorial | HTML for Beginners by Dani Krossing