

@echo SET DIRS=APROG,ATEXT,ATK,ATKLibrary,DocWeb,InfoDB,KNOWHOW,Library,Noten,Webs,VirtualShelf
SET DIRS=ATEXT,ATK,ATKLibrary,DocWeb,InfoDB,KNOWHOW,Library,Noten,Webs,VirtualShelf


FOR /R . %%G in (.) DO (
 Pushd %%G
 rmdir /S/Q node_modules
 Popd)
