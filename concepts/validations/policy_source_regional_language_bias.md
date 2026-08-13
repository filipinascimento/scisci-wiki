# Policy source regional/language bias

## Summary

Policy source regional/language bias is the validity problem that tracked policy-document sources overrepresent particular regions, languages, and easily crawled international organizations.

## Canonical Form

- Unit of analysis: policy source, provider source list, language, country, organization type, field, or mention record.
- Typical representation: source list by language/region, source coverage audit, missing-source inventory, or field-specific source bias note.
- Validation target: whether observed policy mentions represent broad policy use or mainly the provider's tracked region/language universe.
- Empirical signature: English, international, or easily searchable sources dominate while non-English and harder-to-crawl policy sources are undercovered.

## Uses in Science of Science

- Refines [policy attention coverage bias](policy_attention_coverage_bias.md) with a source-list composition check.
- Supports [policy source list transparency](policy_source_list_transparency.md) and [policy-source corpus construction](../methods/policy_source_corpus_construction.md).
- Pairs with [policy source tracking-ease bias](policy_source_tracking_ease_bias.md), which isolates crawlability and source-access constraints within the tracked-source list.
- Explains why [policy subject-category concentration](../measures/policy_subject_category_concentration.md) can reflect tracking coverage as well as real policy relevance.
- Provides a guardrail for cross-country and cross-language policy-impact comparisons.

## Operationalization

- Inventory tracked policy sources by country, region, language, organization type, and document type.
- Compare the tracked list with expected policy-source universes for the field or country studied.
- Report missing or weakly covered source classes, such as non-English national ministries, standards bodies, regional agencies, or local policy repositories.
- Avoid cross-national or field-normalized claims unless regional and language coverage are documented.
- Repeat the audit when provider source lists expand.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) states that the Altmetric policy-source selection at the time showed regional bias.
- The paper reports that mainly international English documents were tracked and that non-English policy sources were not yet broadly covered.
- Haunschild and Bornmann note that policy-related sources that are harder to track, such as the International Atomic Energy Agency or the International Organization for Standardization, might be common in disciplines other than medicine or economics.
- They recommend not using policy-related mentions for impact measurement until more policy-related sites are tracked.

## Caveats

- Source-list bias is snapshot-dependent and may decrease as providers expand coverage.
- English-language international sources can still be relevant for some policy questions, so bias should be interpreted relative to the target policy universe.
- Lack of source coverage should not be confused with lack of policy uptake.

## Links

- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [policy source list transparency](policy_source_list_transparency.md)
- [policy source tracking-ease bias](policy_source_tracking_ease_bias.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy subject-category concentration](../measures/policy_subject_category_concentration.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_source_regional_language_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy source language bias; English policy source bias; regional policy-source coverage; non-English policy source gap
