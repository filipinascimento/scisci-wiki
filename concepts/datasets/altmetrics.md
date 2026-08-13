# Altmetrics

## Summary

Altmetrics measure online attention to scholarly outputs through sources such as news, blogs, policy documents, social media, reference managers, and public platforms.

## Canonical Form

- Unit of analysis: paper, dataset, preprint, policy document, news mention, social-media post, or platform event.
- Typical representation: event stream, source-specific counts, attention score, or mention network.
- Mechanism or measurement target: public, policy, social, and online attention beyond scholarly citations.
- Empirical signature: fast, source-specific attention spikes often weakly correlated with later citations.

## Uses in Science of Science

- Used to study public engagement, media attention, policy uptake, and attention inequality.
- Complements citation impact but should not be treated as the same construct.
- Local Altmetric mainstream-media snapshot path is configured in `PATHS.md`.

## Operationalization

- Inputs: mention-level altmetric data, DOIs/URLs, source metadata, timestamps, outlet/user metadata.
- Measures: mention counts, source categories, attention score, temporal bursts, media-citation lag.
- Common model forms: event studies, time-series, media-source classification, link prediction.
- Keep [social media attention channels](social_media_attention_channels.md) source-specific before building composite measures.
- Treat [altmetric composite scores](../measures/altmetric_composite_scores.md) as derived measures that require source-level preservation and validation.
- Use [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md) when comparing online attention with citations.
- Audit [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) and source-specific denominators before comparing fields, journals, or institutions.
- Use [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md) and [altmetric active universe](../methods/altmetric_active_universe.md) to keep denominator choices explicit.
- Record [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md), [altmetric source-list curation](../methods/altmetric_source_list_curation.md), [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md), and [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md) before treating source counts as complete.
- Preserve [altmetric event-context metadata](altmetric_event_context_metadata.md), [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md), and provider score rules such as [altmetric score age-journal normalization](../methods/altmetric_score_age_journal_normalization.md) when source-level data are available.
- Record [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md), source-specific measures such as [Facebook wall-post counts](../measures/facebook_wall_post_counts.md), and validation boundaries such as [altmetric prediction-claim boundary](../validations/altmetric_prediction_claim_boundary.md) before using online attention as an impact forecast.
- Keep residual Costas et al. motifs explicit: [altmetric meaning validation gap](../validations/altmetric_meaning_validation_gap.md), [SSH altmetric bibliometric-gap compensation](../mechanisms/ssh_altmetric_bibliometric_gap_compensation.md), [blog-news scientific discourse genre](../mechanisms/blog_news_scientific_discourse_genre.md), and [same-year altmetric-citation maturation contrast](../validations/same_year_altmetric_citation_maturation_contrast.md).

## Evidence and Validations

- Thelwall et al. and Costas et al. are useful empirical anchors for comparing altmetrics with citations.
- Verified full-text evidence from Thelwall et al. (2013) compares eleven social-web and online-attention sources against citation counts for PubMed articles, treating altmetrics as platform-specific traces rather than interchangeable citation substitutes.
- Thelwall et al. report that coverage differs sharply across platforms, with Twitter much more prevalent than most other sources in their test window; this supports keeping altmetric source categories separate in data models.
- Verified full-text evidence from Costas et al. (2015) extends the comparison across fields and Altmetric.com sources, finding sparse but growing altmetric activity and relatively weak positive relationships with citations.
- Costas et al. also separate source types such as social media, blogs, news, and reference managers, reinforcing the need to model altmetrics as a heterogeneous event stream.
- Costas et al. show that altmetric presence varies strongly by field, that total-altmetrics scores can be Twitter-dominated, and that Mendeley provider data can be conditionally collected.
- A residual Costas et al. pass separates the remaining meaning-validation gap, SSH complementarity mechanism, blog-news discourse interpretation, and same-year citation-versus-altmetric maturation contrast.
- Verified full-text evidence from Bornmann et al. (2016) and Haunschild and Bornmann (2017) adds policy-document mentions as a particularly sparse altmetric source: large WoS and climate-change samples show policy-related mentions for only a small fraction of DOI-bearing papers.
- These papers motivate reusable submotifs: [social media attention channels](social_media_attention_channels.md), [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md), [altmetric source-list curation](../methods/altmetric_source_list_curation.md), [altmetric event-context metadata](altmetric_event_context_metadata.md), [altmetric composite scores](../measures/altmetric_composite_scores.md), [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md), [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md), [altmetric publication-month filter](../methods/altmetric_publication_month_filter.md), [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md), [altmetric-citation association](../validations/altmetric_citation_association.md), and [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md).
- A residual Thelwall pass separates source collection modes, Facebook wall-post measures, the prediction-claim boundary, and [altmetric sign-test direction-magnitude decoupling](../validations/altmetric_sign_test_direction_magnitude_decoupling.md) from the broader altmetrics and citation-association pages.

## Caveats

- Platform coverage and APIs change rapidly.
- Online attention can reflect controversy, promotion, public interest, or policy relevance rather than scientific influence.
- Source-specific coverage can be too sparse for evaluation use even when it is useful for descriptive research.
- Composite attention scores can hide source-specific validity differences and sparse denominators.

## Links

- [social media attention channels](social_media_attention_channels.md)
- [altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric source collection-mode heterogeneity](../methods/altmetric_source_collection_mode_heterogeneity.md)
- [altmetric event-context metadata](altmetric_event_context_metadata.md)
- [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [Facebook wall-post counts](../measures/facebook_wall_post_counts.md)
- [altmetric score age-journal normalization](../methods/altmetric_score_age_journal_normalization.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md)
- [Mendeley conditional collection bias](../validations/mendeley_conditional_collection_bias.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric publication-month filter](../methods/altmetric_publication_month_filter.md)
- [online-first altmetric timing lag](../validations/online_first_altmetric_timing_lag.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric meaning validation gap](../validations/altmetric_meaning_validation_gap.md)
- [same-year altmetric-citation maturation contrast](../validations/same_year_altmetric_citation_maturation_contrast.md)
- [altmetric prediction-claim boundary](../validations/altmetric_prediction_claim_boundary.md)
- [altmetric sign-test direction-magnitude decoupling](../validations/altmetric_sign_test_direction_magnitude_decoupling.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [altmetric-citation maturation asymmetry](../validations/altmetric_citation_maturation_asymmetry.md)
- [altmetric audience-filtering hypothesis](../mechanisms/altmetric_audience_filtering_hypothesis.md)
- [SSH altmetric bibliometric-gap compensation](../mechanisms/ssh_altmetric_bibliometric_gap_compensation.md)
- [blog-news scientific discourse genre](../mechanisms/blog_news_scientific_discourse_genre.md)
- [precision-recall user-role fit](../validations/precision_recall_user_role_fit.md)
- [altmetric density-citation density ratio](../measures/altmetric_density_citation_density_ratio.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [openalex](../datasets/openalex.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [replication reproducibility](../validations/replication_reproducibility.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]
- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `altmetrics`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Priem et al. manifesto (2010)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: alternative metrics; social media attention; online attention
