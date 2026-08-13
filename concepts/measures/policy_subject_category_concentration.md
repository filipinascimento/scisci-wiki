# Policy subject-category concentration

## Summary

Policy subject-category concentration measures how policy-related mentions are concentrated in particular Web of Science subject categories.

## Canonical Form

- Unit of analysis: subject category, DOI-bearing paper set, policy mention, publication year, or provider snapshot.
- Typical representation: counts and percentages of papers with at least one policy mention by subject category.
- Measurement target: field distribution of observed policy-document attention.
- Empirical signature: policy mentions are concentrated in policy-relevant or provider-covered areas such as medicine, public health, economics, environment, and food-related fields.

## Uses in Science of Science

- Provides a field-stratified layer for [policy document mentions](policy_document_mentions.md).
- Supports [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md) by separating absolute counts from relative rates.
- Connects field concentration to [practical-use policy relevance gradient](../mechanisms/practical_use_policy_relevance_gradient.md) as a mechanism hypothesis.
- Helps detect [policy source regional/language bias](../validations/policy_source_regional_language_bias.md) and field-specific tracking gaps.
- Prevents global policy-mention rates from being generalized across fields without evidence.

## Operationalization

- Assign each DOI-bearing paper to Web of Science subject categories.
- Count papers and policy-mentioned papers by subject category.
- Compute both absolute mentioned-paper counts and within-category mention percentages.
- Compare top categories by count and by percentage because large fields and high-rate fields differ.
- Report whether multi-category journals are full counted or fractionally counted.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) reports policy mention counts and percentages for 228 Web of Science subject categories.
- The largest absolute counts include Public, Environmental and Occupational Health, Economics, Medicine, General and Internal, Environmental Sciences, Microbiology, Oncology, and Infectious Diseases.
- The largest percentages include Agricultural Economics and Policy at 2.97%, Tropical Medicine at 2.64%, Economics at 2.18%, Business, Finance at 2.15%, and Parasitology at 2.08%.
- The paper notes that top categories are closely related to medicine or economics and have practical-use connections, while also warning that this pattern may reflect Altmetric's tracked policy-source selection.

## Caveats

- Subject categories are journal-level classifications and can be multi-assigned.
- Concentration can reflect true policy relevance, source-list coverage, DOI availability, language coverage, or [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md).
- Sparse rates require uncertainty reporting before comparing small fields.

## Links

- [policy document mentions](policy_document_mentions.md)
- [policy mention coverage rate](policy_mention_coverage_rate.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [practical-use policy relevance gradient](../mechanisms/practical_use_policy_relevance_gradient.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy source regional/language bias](../validations/policy_source_regional_language_bias.md)
- [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md)
- [field classifications](field_classifications.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_subject_category_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy mention field concentration; policy subject-category profile; policy mention field profile; policy attention field concentration
