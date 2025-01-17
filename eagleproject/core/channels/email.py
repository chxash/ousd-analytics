from django.conf import settings
#from django.core.mail import EmailMessage
from django.core import mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class Email():
    def __init__(self, summary, plain_text_details, details):
        self.summary = summary
        self.plain_text_details = plain_text_details
        self.details = details

    def _is_configured(self):
        return (
            settings.DEFAULT_FROM_EMAIL is not None
            and settings.EMAIL_HOST is not None
            and settings.EMAIL_HOST_USER is not None
            and settings.EMAIL_HOST_PASSWORD is not None
        )

    def execute(self, recipients):
        if self._is_configured():
            from_email = settings.DEFAULT_FROM_EMAIL

            return mail.send_mail(
                self.summary,
                self.plain_text_details,
                from_email,
                recipients,
                fail_silently=False,
                html_message=self.details
            )

            # msg = EmailMessage(
            #   from_email=settings.DEFAULT_FROM_EMAIL,
            #   to=['grabec@gmail.com'],
            # )
            # msg.template_id = "analytics_report_email.html"
            # msg.dynamic_template_data = {
            #   "title": "title"
            # }
            # return msg.send(fail_silently=False)

            # return send_mail(
            #     self.summary,
            #     #self.plain_text_details,
            #     "test",
            #     #settings.DEFAULT_FROM_EMAIL,
            #     "lalal@gmail.com",
            #     ['grabec@gmail.com'],
            #     fail_silently=False,
            #     #html_message=self.details
            # )

        else:
            # If we're not configured, don't die, but don't be silent
            print('E-mail not configured', settings.DEFAULT_FROM_EMAIL)