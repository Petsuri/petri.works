import React from "react";
import { useTranslation } from "react-i18next";
import { PageContainer, UCaseTypography } from "../../components";
import { CodeBlock } from "../../components/CodeBlock";
import { GenericParagraphs } from "./GenericParagraphs";

export default function ChapterOnePage() {
  const { t } = useTranslation();
  return (
    <PageContainer>
      <UCaseTypography variant="h3">{t("career.chapter.four.header")}</UCaseTypography>
      <GenericParagraphs
        TranslationKey="career.chapter.four"
        FirstParagraphIndex={1}
        LastParagraphIndex={3}
        Headers={[3]}
        ListItems={[{ ParagraphIndex: 1, LastItemIndex: 5 }]}
      />
      <CodeBlock>
        {`  public async subscribe(subscription: Subscription): Promise<Result<Unit, string>> {
    const request = client.scan({
      TableName: "subscriptions",
      FilterExpression: "email = :email",
      ExpressionAttributeValues: { ":email": subscription.email.email },
    });
    const result = await request
      .promise()
      .then((object) => {
        if (object.Items && 0 < object.Items.length) {
          return success(some(object.Items));
        }
        return success(none());
      })
      .catch((value) => {
        return failure({ message: value.message, code: value.code });
      });
    if (!result.ok) {
      return failure(result.error.message);
    }

    if (result.value.isSome) {
      return success(none());
    }

    const request = client.put({
      TableName: "subscriptions",
      Item: { email: subscription.email.email, name: subscription.name.name },
    });
    const result = await request
      .promise()
      .then((_) => {
        return success(unit());
      })
      .catch((value) => {
        return failure({ message: value.message, code: value.code });
      });
    if (result.ok) {
      return success(unit());
    }
    return failure(result.error.message);
  }`}
      </CodeBlock>
      <GenericParagraphs
        TranslationKey="career.chapter.four"
        FirstParagraphIndex={4}
        LastParagraphIndex={5}
        Headers={[]}
        ListItems={[]}
      />
      <CodeBlock>
        {`class SubscriptionService {
  private readonly _repository: SubscriptionRepository;

  public constructor(repository: SubscriptionRepository) {
    this._repository = repository;
  }

  public async subscribe(subsription: Subscription): Promise<Result<Unit, string>> 
  {
    const exists = await this._repository.find(subscription.email);
    if (!exists.ok) {
      return failure(exists.error);
    }

    if (exists.value.isSome) {
      return success(unit());
    }

    const result = await this._repository.save(subscription);
    if (result.ok) {
      return success(unit());
    }

    return failure(result.error);
  }
}

interface SubscriptionRepository {
  find(email: EmailAddress): Promise<Result<Option<Subscription>, string>>;
  save(subsription: Subscription): Promise<Result<Unit, string>>;
}`}
      </CodeBlock>
      <GenericParagraphs
        TranslationKey="career.chapter.four"
        FirstParagraphIndex={7}
        LastParagraphIndex={9}
        Headers={[8]}
        ListItems={[]}
      />
    </PageContainer>
  );
}
