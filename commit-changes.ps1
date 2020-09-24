#On récupère les infos du fichier de configuration
# Get-Content "./commit-changes-configuration.ini" | foreach-object -begin {$h=@{}} -process { $k = [regex]::split($_,'='); if(($k[0].CompareTo("") -ne 0) -and ($k[0].StartsWith("[") -ne $True)) { $h.Add($k[0], $k[1]) } }

# $cloneFolder = $h.Get_Item("CloneFolder")

# Write-Host "Clone Folder: " + $cloneFolder

# $foldersToCopyFr = @("fr/api", "fr/articles", "fr/bots", "fr/dynameet", "fr/icons", "fr/videos")
# $foldersToCopyEn = @("en/articles", "en/medias", "en/icons", "en/videos")

# $numberOfFolderToCopy = $foldersToCopyFr.Count + $foldersToCopyEn.Count
# Write-Host "Start copy of $count folders" -ForegroundColor green

# $cloneFolderFr = $cloneFolder + "\fr"
# foreach ($folder in $foldersToCopyFr) {
#     # On copie tous les éléments du dossier $folder dans le dossier de clone et on remplace les fichiers
#     Copy-Item -Path "./$folder" -Recurse -Destination $cloneFolderFr -Container -Force
#     Write-Host "Copied the content of $folder into $cloneFolderFr "
# }

# Write-Host "$numberOfFolderToCopy folders copied to $cloneFolderFr" -ForegroundColor green

# $cloneFolderEn = $cloneFolder + "\en"
# foreach ($folder in $foldersToCopyEn) {
#     # On copie tous les éléments du dossier $folder dans le dossier de clone et on remplace les fichiers
#     Copy-Item -Path "./$folder" -Recurse -Destination $cloneFolderEn -Container -Force
#     Write-Host "Copied the content of $folder into $cloneFolderEn "
# }

# Write-Host "$foldersToCopyEn.Count folders copied to $cloneFolderEn" -ForegroundColor green
# # On garde la localisation actuelle en mémoire pour pouvoir y revenir après.
# Push-Location
# # On passe dans le dossier ou se trouve les infos git.
# Set-Location -Path $cloneFolder
# on ajoute tous les fichiers mis à jours
git add *
$date = (Get-Date).toString("yyyy.MM.dd.hh.mm")
# On commit et on push
git commit -m "Update $date"
git push
# On revient à la localisation précedente pour pouvoir relancer le script
# Pop-Location

Write-Host "Documentation updated" -ForegroundColor green
