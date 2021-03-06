
<?php defined( '_JEXEC' ) or die( 'Restricted access' );
/** @var JDocumentHtml $this */

$app  = JFactory::getApplication();
$user = JFactory::getUser();

// Output as HTML5
$this->setHtml5(true);

// Add JavaScript Frameworks
JHtml::_('bootstrap.framework');

// Add template js
JHtml::_('script', 'template.js', array('version' => 'auto', 'relative' => true));

// Add html5 shiv
JHtml::_('script', 'jui/html5.js', array('version' => 'auto', 'relative' => true, 'conditional' => 'lt IE 9'));

// Add Stylesheets and 
JHtml::_('stylesheet', 'template.css', array('version' => 'auto', 'relative' => true));

// Check for a custom js file
//JHtml::_('script', 'user.js', array('version' => 'auto', 'relative' => true));

// Check for a custom CSS file
JHtml::_('stylesheet', 'user.css', array('version' => 'auto', 'relative' => true));
?>

<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<jdoc:include type="head" />
<link rel="styleheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/css/user.css" type="text/css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<script type="module" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/js/user.js"  ></script>
</head>
<body>
<header>
<nav>

<jdoc:include type="modules" name="top" />
<div class="burger">
 <div class="line1"></div>
 <div class="line2"></div>
 <div class="line3"></div>
</div></nav>
</header>
<main><jdoc:include type="component" /></main>
<footer><jdoc:include type="modules" name="footer" /></footer>
<script>
        /*     function openSlideMenu() {
                document.getElementById('side-menu').style.width = '250px';
                console.log("opened");
            }
            function closeSlideMenu() {
                document.getElementById('side-menu').style.width = '0';
                console.log("closed");
            } */
                  </script>

</body>
</html>