"use server";

type Recipient = {
  address: string;
  name: string;
  merge_info?: Record<string, string>;
};

type SendMailOptions = {
  recipients: Recipient[];
  mailTemplateKey?: string;
  from?: {
    address: string;
    name: string;
  };
  globalMergeInfo?: Record<string, string>;
};

export async function sendTemplateMail({
  recipients,
  mailTemplateKey = "2518b.5ca07f11c3f3c129.k1.ce533f81-7e49-11f0-97a1-8e9a6c33ddc2.198caf32b78",
  from = { address: "noreply@spacetopia.in", name: "noreply" },
  globalMergeInfo = {},
}: SendMailOptions): Promise<{ success: boolean; data?: any; error?: any }> {
  const url = "https://api.zeptomail.in/v1.1/email/template/batch";
  const apiKey =
    "Zoho-enczapikey PHtE6r0PQe++iWMt80VStKSxQMWhZ94nru40f1FC491HAvMHFk1Vq9gslTGzrB0sVaJGF/GTzoxgtuud4ujRd2u7YW9IDWqyqK3sx/VYSPOZsbq6x00csF4dck3aXIXsdddq0CTUvtzeNA==";

  // Prepare the "to" array as per ZeptoMail API
  const to = recipients.map((recipient) => ({
    email_address: {
      address: recipient.address,
      name: recipient.name,
    },
    merge_info: {
      ...globalMergeInfo,
      ...(recipient.merge_info || {}),
    },
  }));

  const payload = {
    mail_template_key: mailTemplateKey,
    from,
    to,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
