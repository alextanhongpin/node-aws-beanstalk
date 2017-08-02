# AWS Beanstalk Nodejs


Zip all your files here (except node_modules) and package it. 

From an official AWS thread[1], it appears (and this was my problem) that you might be zipping the top-level directory rather than zipping the source itself.

For example, you may have all of your files in a folder called "Project". Rather than zipping "Project", you should zip and upload the contents of "Project".
