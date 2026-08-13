# Policy mention coverage rate

## Summary

Policy mention coverage rate is the proportion of an eligible publication set that receives at least one mention in tracked policy-related documents.

## Canonical Form

- Unit of analysis: paper set, field, topic, publication year, source snapshot, institution, country, or document type.
- Typical representation: `papers with at least one policy mention / eligible DOI-bearing papers`, often stratified by field and year.
- Measurement target: observed reach of scholarly work into the tracked policy-document corpus.
- Empirical signature: very low rates, usually requiring binary mentioned/not-mentioned treatment rather than intensity comparisons.

## Uses in Science of Science

- Refines [policy document mentions](policy_document_mentions.md) by making the denominator explicit.
- Provides the core quantitative signal for [policy attention coverage bias](../validations/policy_attention_coverage_bias.md).
- Uses [policy-source corpus construction](../methods/policy_source_corpus_construction.md), [policy source list transparency](../validations/policy_source_list_transparency.md), and DOI coverage as prerequisites.
- Supports topic-specific datasets such as the [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md).
- Helps compare policy mentions to other sparse traces such as [altmetric coverage sparsity](altmetric_coverage_sparsity.md), [patent-paper links](../datasets/patent_paper_links.md), and clinical guideline citations.

## Operationalization

- Define the eligible publication denominator, including document types, years, DOI availability, field/topic filters, and source snapshot date.
- Match papers to policy mentions through DOI, URL, title, or bibliographic strings.
- Count a paper once if it has at least one policy-document mention, unless the research question explicitly concerns intensity.
- Store the paper-level [policy mention binary indicator](policy_mention_binary_indicator.md) when counts are too sparse for stable intensity modeling.
- Report rates by field, topic, year, source list, and data provider because rates are sensitive to both policy relevance and tracking coverage.
- Avoid interpreting non-mentions as non-use; absence of a tracked mention is a property of the observed corpus.
- For broad cohorts, separate [annual policy mention coverage curves](annual_policy_mention_coverage_curve.md) and [policy subject-category concentration](policy_subject_category_concentration.md) from a single aggregate rate.
- Apply [policy-altmetric 80/20 readiness rule](../validations/policy_altmetric_80_20_readiness_rule.md) before using coverage rates for field-specific assessment.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) reports that 1.2% of 191,276 DOI-bearing climate-change papers had at least one policy mention.
- Bornmann et al. also report that most policy-mentioned climate-change papers received only one or two mentions, motivating binary coverage rates.
- This motivates [policy mention binary indicator](policy_mention_binary_indicator.md) construction before interpreting raw mention counts as intensity.
- Verified full-text evidence from Haunschild and Bornmann (2017) analyzes 11,254,636 DOI-bearing Web of Science papers from 2000 to 2014 and finds 35,504 papers with at least one policy-related mention.
- Haunschild and Bornmann report that less than 0.5% of papers in subject categories had at least one policy-related mention, with a maximum of 0.48% for one publication year.
- The same paper reports that policy-mentioned papers appear in 228 WoS subject categories, but the highest absolute and relative concentrations are concentrated in applied medicine, health, economics, environment, and related policy-facing categories.
- Both studies warn that low coverage can reflect provider source coverage, policy relevance, non-citation practices in policy documents, and weak researcher-policy interaction.

## Caveats

- Coverage rate is not the same as societal impact; it is an observed mention rate in a tracked corpus.
- DOI-only denominators can exclude papers used in policy but not formally or correctly cited.
- Source-list expansion over time can change rates without any real change in policy use.
- Cross-field comparisons require normalization by field, year, source coverage, document type, and topic.

## Links

- [policy document mentions](policy_document_mentions.md)
- [policy mention binary indicator](policy_mention_binary_indicator.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [annual policy mention coverage curve](annual_policy_mention_coverage_curve.md)
- [policy subject-category concentration](policy_subject_category_concentration.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [policy citation-style omission](../validations/policy_citation_style_omission.md)
- [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md)
- [policy mention time lag](policy_mention_time_lag.md)
- [policy-altmetric 80/20 readiness rule](../validations/policy_altmetric_80_20_readiness_rule.md)
- [research-policy interaction barrier](../mechanisms/research_policy_interaction_barrier.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [societal impact case studies](../methods/societal_impact_case_studies.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_coverage_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy mention prevalence; policy-document mention share; policy-related mention rate; at-least-one policy mention rate
