# Retraction notice transparency

## Summary

Retraction notice transparency measures whether a retraction notice clearly explains why a paper was retracted and whether the explanation is sufficient for downstream users to interpret the invalidated work.

## Canonical Form

- Unit of analysis: retraction notice, retracted paper, journal, publisher, cause label, investigation report, or correction event.
- Typical representation: notice-quality audit, reason-code table, opaque-notice flag, or secondary-source reconciliation table.
- Mechanism or validation target: transparency of post-publication correction.
- Empirical signature: notices vary from detailed cause statements to opaque announcements with no usable reason.

## Uses in Science of Science

- Provides the notice-quality layer beneath [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md).
- Helps prevent retraction datasets from overclassifying error when misconduct details appear only in secondary sources.
- Supports [open science interventions](open_science_interventions.md) that target uniform correction standards and centralized misconduct data.
- Gives [responsible metrics](../measures/responsible_metrics.md) a guardrail: retraction counts should be interpreted with notice-quality metadata.

## Operationalization

- Collect retraction notices from publisher pages, PubMed records, Crossref updates, Retraction Watch, and institutional reports.
- Code whether the notice states a reason, identifies error or misconduct, names the responsible party when appropriate, and links to investigation evidence.
- Record opaque, missing, ambiguous, or author-written notices separately from transparent notices.
- Reconcile notice-only categories against secondary sources before using the retraction as evidence about misconduct or error.
- Keep the reconciliation provenance explicit with [retraction source reconciliation](../methods/retraction_source_reconciliation.md).
- Track [author-written retraction notice bias](../mechanisms/author_written_retraction_notice_bias.md) as a notice-provenance mechanism when author-authored notices may under-disclose misconduct.

## Evidence and Validations

- Verified full-text evidence from Fang et al. (2012) shows that incomplete, uninformative, or misleading notices led earlier studies to underestimate fraud.
- Fang et al. report that consulting Office of Research Integrity reports and other public sources reclassified 158 articles, including 118 cases previously classified as error, into fraud.
- The paper states that some notices are specific and detailed, but many are uninformative or opaque; in 119 instances, journals provided no information about the reason for retraction.
- Fang et al. argue for uniform standards regarding retraction notices because notice opacity systematically affects cause coding.
- Their reclassification of apparent error cases into fraud after secondary-source review shows why notice transparency directly affects [misconduct retraction share](../measures/misconduct_retraction_share.md).
- Fang et al. additionally identify author-written notices as a mechanism behind opacity, now split out as [author-written retraction notice bias](../mechanisms/author_written_retraction_notice_bias.md).

## Caveats

- A transparent notice does not guarantee that all relevant details are known.
- Investigation timelines can make early notices incomplete.
- Notice transparency varies by journal policy, legal risk, and whether authors or editors write the notice.

## Links

- [retractions and scientific self-correction](retractions_self_correction.md)
- [retraction cause taxonomies](../methods/retraction_cause_taxonomies.md)
- [retraction source reconciliation](../methods/retraction_source_reconciliation.md)
- [author-written retraction notice bias](../mechanisms/author_written_retraction_notice_bias.md)
- [misconduct retraction share](../measures/misconduct_retraction_share.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md)
- [open science interventions](open_science_interventions.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; WoS: unknown]

## Metadata

- Concept ID: `retraction_notice_transparency`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Aliases: opaque retraction notices; notice informativeness; correction notice quality; retraction notice coding
