# Policy source tracking-ease bias

## Summary

Policy source tracking-ease bias is the validity problem that policy-document mention data overrepresent sources that providers can crawl, search, and match easily, while harder-to-track policy bodies remain weakly observed.

## Canonical Form

- Unit of analysis: policy source, source organization, provider crawler, document repository, field, policy mention, or source-list snapshot.
- Typical representation: crawlability audit, hard-to-track source inventory, source-type coverage table, or field-specific source-coverage caveat.
- Validation target: whether observed policy mentions reflect policy use or the technical convenience of the tracked source list.
- Empirical signature: fields tied to easily indexed policy repositories appear more policy-mentioned than fields whose policy evidence travels through standards bodies, agencies, or repositories that are not easily searched.

## Uses in Science of Science

- Extends [policy source regional/language bias](policy_source_regional_language_bias.md) from geography and language to source accessibility.
- Qualifies [policy subject-category concentration](../measures/policy_subject_category_concentration.md) before interpreting field differences as real policy relevance.
- Adds a source-construction check to [policy-source corpus construction](../methods/policy_source_corpus_construction.md), [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md), and [policy source list transparency](policy_source_list_transparency.md).
- Links policy mentions to the broader source-curation problem in [altmetric source-list curation](../methods/altmetric_source_list_curation.md).

## Operationalization

- Inventory tracked and missing policy sources by crawlability, search interface, document format, robots/API restrictions, and repository structure.
- Compare provider-tracked sources against field-specific policy-source universes, including standards bodies, safety agencies, national ministries, and technical regulators.
- Record whether sources are machine-readable, searchable, DOI-linkable, URL-stable, or only available through PDFs, portals, or non-indexed repositories.
- Treat field-level policy-mention rates as source-list dependent until hard-to-track source classes are audited.
- Re-run the audit when providers expand their policy-source list or improve matching workflows.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) warns that observed subject-category patterns may be related to Altmetric's selection of tracked policy-related sources.
- The paper states that Altmetric tracks the most easily searchable policy-related sources.
- Haunschild and Bornmann note that harder-to-track policy-related sources, such as the International Atomic Energy Agency or the International Organization for Standardization, may be more common in disciplines other than medicine or economics.
- This makes tracking ease a plausible explanation for why the highest observed policy-mention categories are concentrated in medicine and economics-related areas.

## Caveats

- Tracking-ease bias can coexist with true policy relevance; a field can be both policy-facing and easier to crawl.
- Crawlability changes over time as agencies redesign repositories or providers add new extraction workflows.
- The absence of a tracked mention from a hard-to-track source is not evidence of no policy use.

## Links

- [policy source regional/language bias](policy_source_regional_language_bias.md)
- [policy subject-category concentration](../measures/policy_subject_category_concentration.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy source list transparency](policy_source_list_transparency.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention context audit](policy_mention_context_audit.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_source_tracking_ease_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy source crawlability bias; easily searchable policy-source bias; policy tracking convenience bias; hard-to-track policy source gap
