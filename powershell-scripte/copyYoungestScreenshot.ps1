$dir = "G:\_001.BilderFormenKlaenge\_Scans und Screenshots"
$latest = Get-ChildItem -Path $dir | Sort-Object LastAccessTime -Descending | Select-Object -First 1
$latest.name
Copy-Item -Path $dir\$latest -Destination ./images/$(Get-Date -Format yyyy-MM-dd-HH-mm)-$latest -PassThru