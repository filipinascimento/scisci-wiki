# Practical-use policy relevance gradient

## Summary

Practical-use policy relevance gradient is the mechanism by which fields with direct application to health, economics, environment, safety, or regulation are more likely to produce work that appears in policy-related documents.

## Canonical Form

- Unit of analysis: field, subject category, policy sector, paper, topic, guideline, report, or publication cohort.
- Typical representation: field-level policy-mention rate, subject-category enrichment profile, practical-use field label, or target-sector comparison.
- Mechanism: policy actors preferentially draw on research areas with immediate decision, service, regulatory, or public-resource consequences.
- Empirical signature: policy-mentioned papers are concentrated in fields whose results plausibly inform practice, such as medicine, public health, economics, environment, food, or finance.

## Uses in Science of Science

- Gives a mechanism-side interpretation for [policy subject-category concentration](../measures/policy_subject_category_concentration.md) and [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md).
- Links [policy document mentions](../measures/policy_document_mentions.md) to [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md) by naming the recipient use context.
- Helps separate genuine policy-facing relevance from [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md), [policy source regional/language bias](../validations/policy_source_regional_language_bias.md), and DOI denominator problems.
- Connects policy attention to broader science-policy portfolio questions such as [biomedical need-resource misalignment](../measures/biomedical_need_resource_misalignment.md).

## Operationalization

- Define practical-use strata using field classifications, topic labels, policy-sector mappings, guidelines, regulatory domains, or expert-coded use contexts.
- Compare policy-mention rates across strata after controlling for DOI coverage, publication year, document type, provider source list, and field size.
- Use [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md) to compare the policy-mentioned subset with the eligible baseline.
- Audit whether high rates persist after accounting for source-list composition and hard-to-track sources.
- Treat practical-use relevance as a hypothesis requiring context checks, not as proof that a mention caused policy change.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) reports that the Web of Science subject categories with the largest absolute and relative policy-mention counts are closely related to medicine or economics.
- The paper interprets these categories as having significant connections to the practical use of scientific results.
- Haunschild and Bornmann state that higher societal impact in these disciplines is understandable, while also warning that the pattern may reflect Altmetric's tracked policy-source selection.
- The same full text therefore supports a two-part interpretation: practical-use relevance is plausible, but it must be separated from source-list and tracking-ease bias.

## Caveats

- Practical usefulness is not identical to observed policy-document mention coverage.
- Some highly policy-relevant fields may be underobserved if their policy sources are non-English, not easily crawled, or do not use formal scholarly references.
- A policy mention can be background evidence, disagreement, bibliographic listing, or unintended source content rather than substantive uptake.

## Links

- [policy subject-category concentration](../measures/policy_subject_category_concentration.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md)
- [public and policy attention](public_policy_attention.md)
- [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md)
- [policy source regional/language bias](../validations/policy_source_regional_language_bias.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [biomedical need-resource misalignment](../measures/biomedical_need_resource_misalignment.md)
- [societal-needs assessment alignment](../methods/societal_needs_assessment_alignment.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `practical_use_policy_relevance_gradient`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: practical-use policy relevance; applied-field policy attention; policy-facing field relevance; practical science policy uptake gradient
