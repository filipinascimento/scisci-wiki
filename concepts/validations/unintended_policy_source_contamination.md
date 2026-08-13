# Unintended policy-source contamination

## Summary

Unintended policy-source contamination is the validation problem that tracked policy-related websites can contain non-policy pages, such as CVs or publication lists, that generate policy mentions without substantive policy use.

## Canonical Form

- Unit of analysis: policy source, tracked webpage, document type, paper-policy mention, provider source list, or context audit sample.
- Typical representation: false-positive source type, CV/listing flag, source-section audit, or contaminated-source exclusion sensitivity.
- Validation target: determine whether a policy mention comes from an intended policy document or from unrelated material hosted on a tracked source.
- Empirical signature: policy mentions originate from pages that list publications or biographies rather than policy guidance, reports, regulations, or evidence syntheses.

## Uses in Science of Science

- Splits a specific false-positive pathway out of [policy mention context audit](policy_mention_context_audit.md).
- Qualifies [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md) because a tracked domain can host mixed document types.
- Supports [policy-source corpus construction](../methods/policy_source_corpus_construction.md) by requiring source-section or document-type filters.
- Helps prevent [policy document mentions](../measures/policy_document_mentions.md) from being used as unexamined societal-impact badges.

## Operationalization

- Inspect a sample of policy mentions by source, URL path, document type, and page section.
- Label mentions from CVs, publication lists, staff profiles, generic repositories, mirrors, or administrative pages separately from policy reports and guidelines.
- Recompute policy-mention rates after excluding contaminated source sections or document types.
- Preserve source URL and document-type metadata so future audits can distinguish source inclusion from substantive policy use.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) states that the location of a publication mention on policy-related websites can be unknown.
- The paper warns that policy-related sources can be large and can contain unintended documents.
- Haunschild and Bornmann give CV-like publication lists as an example of a source of policy-related mentions that may not represent substantive policy use.
- Because observed policy mentions are rare, even a small number of contaminated source pages can matter for paper-level or field-level interpretation.

## Caveats

- CV-like or listing pages can still indicate visibility within a policy organization, but they should not be interpreted the same way as a policy recommendation.
- Contamination rates can vary strongly by provider, organization, source type, URL structure, and snapshot date.
- Excluding source sections requires transparent rules because overly aggressive filtering can remove legitimate evidence-synthesis documents.

## Links

- [policy mention context audit](policy_mention_context_audit.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy source list transparency](policy_source_list_transparency.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy document deduplication](policy_document_deduplication.md)
- [assessment report policy boundary](assessment_report_policy_boundary.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `unintended_policy_source_contamination`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy-source false positives; CV policy mention contamination; unintended policy document source; non-policy page contamination
