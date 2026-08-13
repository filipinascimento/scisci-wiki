# Altmetric author self-mention bias

## Summary

Altmetric author self-mention bias is the risk that authors' own posts, promotions, or platform accounts inflate online-attention counts that are interpreted as external interest.

## Canonical Form

- Unit of analysis: paper, author, platform user, mention event, source account, or provider record.
- Typical representation: author-origin flag, self-mention share, self-promotion sensitivity analysis, or unverifiable self-mention caveat.
- Validation target: determine whether source counts represent independent attention or partly reflect author-driven promotion.
- Empirical signature: author-origin events are present or plausible but cannot be fully removed because platform identities do not map cleanly to author identities.

## Uses in Science of Science

- Adds an author-origin audit to [social media attention channels](../datasets/social_media_attention_channels.md).
- Complements citation-side [self-citation rates](../measures/self_citation_rates.md) when altmetrics are compared with citations.
- Qualifies [Twitter mention counts](../measures/twitter_mention_counts.md), [blog and news mention counts](../measures/blog_and_news_mention_counts.md), and [altmetric-citation association](altmetric_citation_association.md).
- Provides a concrete [responsible metrics](../measures/responsible_metrics.md) check before using online attention in evaluation.

## Operationalization

- Where platform identity data allow it, match mention accounts to paper authors, institutions, labs, journals, or known promotional accounts.
- Report whether author-origin events were excluded, retained, or unverifiable.
- Compare results with and without likely self-mentions when identity matching is feasible.
- Use [altmetric event-context metadata](../datasets/altmetric_event_context_metadata.md) and [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md) to distinguish repeated self-promotion from broader actor-level attention when data permit.
- Distinguish author self-mentions from journal promotion, publisher promotion, automated feeds, and third-party discussion.
- Treat unremoved self-mentions as a limitation rather than as clean public attention.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) excludes first-author self-citations from Web of Science citation counts, but does not remove authors' own mentions from the altmetric data.
- The paper gives a practical reason: platform usernames do not reliably conform to author-name guidelines, making author matching difficult.
- Thelwall et al. also state that previous studies and altmetric websites had not attempted to remove self-citations from altmetric data.
- This establishes author self-mention as a documented validation caveat for early altmetric source studies, even when citation self-citations are handled.

## Caveats

- Self-mentions are not automatically invalid; they can be part of legitimate dissemination and public communication.
- Removing only identifiable self-mentions can create differential measurement error across platforms, fields, and author groups.
- Identity matching can misclassify common names, pseudonyms, institutional accounts, and collaborative lab accounts.

## Links

- [social media attention channels](../datasets/social_media_attention_channels.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [altmetric event-context metadata](../datasets/altmetric_event_context_metadata.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [blog and news mention counts](../measures/blog_and_news_mention_counts.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [citation metric gaming](citation_metric_gaming.md)
- [search-result reputation reinforcement](../mechanisms/search_result_reputation_reinforcement.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_author_self_mention_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric self-promotion; author-origin altmetric events; author self-mentions; social media self-citation
