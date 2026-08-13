# Author name disambiguation

## Summary

Author name disambiguation groups publication-level author mentions into real author identities so author-level, team-level, and mobility analyses are not distorted by homonyms or synonyms.

## Canonical Form

- Unit of analysis: author mention, publication-author edge, inferred person identity, or author cluster.
- Typical representation: [author-name blocking](author_name_blocking.md), [author similarity clustering](author_similarity_clustering.md), persistent identifiers, and [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md).
- Mechanism or measurement target: entity resolution for people in scholarly databases.
- Empirical signature: author mentions with shared names, affiliations, coauthors, topics, or identifiers are merged or split into inferred author identities.

## Uses in Science of Science

- Required infrastructure for [scientific career impact](../mechanisms/scientific_career_impact.md), [scientific mobility](../mechanisms/scientific_mobility.md), [coauthorship networks](../representations/coauthorship_networks.md), and team-size measures.
- Required before many [name-based demographic inference](name_based_demographic_inference.md) workflows, because unresolved author mentions can mix demographic proxies across different people.
- Provides data-quality grounding for [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), [SciSciNet-v2](../datasets/sciscinet_v2.md), and [Web of Science](../datasets/web_of_science.md) workflows.
- Helps distinguish true author productivity, collaboration, and institutional movement from database artifacts.
- Separates data-quality failure modes such as [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md) from downstream scientific mechanisms.
- Includes source-specific implementations such as [ORCID-assisted person disambiguation](orcid_assisted_person_disambiguation.md), which uses ORCID publication overlap to improve algorithmic clusters, and [journal-scoped initial-name disambiguation](journal_scoped_initial_name_disambiguation.md), which uses venue scope as a constraint.
- Residual validation motifs now separate [blocking split-error ceiling](../validations/blocking_split_error_ceiling.md), [metric-dependent disambiguation ranking](../validations/metric_dependent_disambiguation_ranking.md), [common-name block bias](../validations/common_name_block_bias.md), and [identifier-covered evaluation denominator](../validations/identifier_covered_evaluation_denominator.md).

## Operationalization

- Normalize and block author mentions by name variants to reduce the comparison space using [author-name blocking](author_name_blocking.md).
- Compare mentions with [author metadata similarity features](../representations/author_metadata_similarity_features.md) such as coauthors, affiliations, journals, topics, references, emails, or external identifiers.
- Cluster author mentions using supervised, semi-supervised, or unsupervised entity-resolution methods such as [author similarity clustering](author_similarity_clustering.md).
- Validate against curated identifiers or hand-labeled samples such as [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md) with [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md).

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) states that adequate author-name disambiguation is a precondition for reliable author-level bibliometric analyses.
- The paper identifies the core ambiguity mechanisms: homonyms, where different people share the same name, and synonyms, where one author publishes under different names.
- Tekles and Bornmann compare unsupervised approaches under controlled conditions using author mentions annotated with ResearcherID and examine how parameterization, metadata choice, and task complexity affect performance.
- The full text emphasizes blocking as the first step: name-based blocks narrow the search space, but more specific blocking reduces computation while increasing the risk of uncorrectable splitting errors.
- The same verified text compares pairwise precision/recall/F1 with best precision/recall/F1, showing that evaluation choice can change method rankings.
- A later residual pass makes four risks explicit: blocking can impose an unrecoverable split-error ceiling, metric choice can reverse algorithm rankings, common-name blocks can bias quality, and identifier-covered benchmarks restrict the evaluated denominator.
- The Tekles and Bornmann full text also supports lower-level motifs for [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md), [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md), [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md), and [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md).
- Verified full-text evidence from Hook et al. (2018) describes Dimensions author clustering from affiliation, coauthorship, citation, and subject-area traits, then matching clusters to ORCID records by DOI overlap.
- Verified full-text evidence from Ioannidis et al. (2019) adds a source-specific [Scopus author profile disambiguation audit](../validations/scopus_author_profile_disambiguation_audit.md), reporting high Scopus precision/recall estimates while still finding split and merged-profile risks in high-impact author records.
- Verified full-text evidence from Sekara et al. (2018) adds [journal-scoped initial-name disambiguation](journal_scoped_initial_name_disambiguation.md), where surname-plus-initial keys are interpreted only inside the same journal to reconstruct author-order histories.

## Caveats

- Disambiguation errors propagate into productivity, collaboration, mobility, inequality, and career-impact estimates.
- Persistent IDs such as ORCID or ResearcherID help but are incomplete and may be biased toward certain fields, countries, or time periods.
- Blocking choices create trade-offs between computational feasibility, false merges, and false splits.
- Evaluation should be stratified by name-block size because large common-name blocks can have lower disambiguation quality.

## Links

- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [Web of Science](../datasets/web_of_science.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [author-name blocking](author_name_blocking.md)
- [author similarity clustering](author_similarity_clustering.md)
- [ORCID-assisted person disambiguation](orcid_assisted_person_disambiguation.md)
- [journal-scoped initial-name disambiguation](journal_scoped_initial_name_disambiguation.md)
- [OpenAlex author-disambiguation features](openalex_author_disambiguation_features.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [unsupervised author-disambiguation comparison](unsupervised_author_disambiguation_comparison.md)
- [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [block-size-dependent disambiguation thresholds](block_size_dependent_disambiguation_thresholds.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [disambiguation attribute-set ablation](../validations/disambiguation_attribute_set_ablation.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)
- [Scopus author profile disambiguation audit](../validations/scopus_author_profile_disambiguation_audit.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [blocking split-error ceiling](../validations/blocking_split_error_ceiling.md)
- [metric-dependent disambiguation ranking](../validations/metric_dependent_disambiguation_ranking.md)
- [common-name block bias](../validations/common_name_block_bias.md)
- [identifier-covered evaluation denominator](../validations/identifier_covered_evaluation_denominator.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [name-based demographic inference](name_based_demographic_inference.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]
- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `author_name_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Aliases: author disambiguation; entity resolution; homonym resolution; synonym resolution; author clustering
