# Citation percentile indicators

## Summary

Citation percentile indicators compare papers to a reference set and report rank-based positions or top-percentile membership instead of raw citation counts.

## Canonical Form

- Unit of analysis: paper, author portfolio, institution, field, funder, country, journal, or program.
- Typical representation: percentile rank, top 1% or top 10% indicator, highly cited paper count, or highly cited paper share.
- Measurement target: relative citation standing within a comparable reference set.
- Empirical signature: papers are classified by their location in a field-year-document-type citation distribution.

## Uses in Science of Science

- Operationalizes highly cited work for studies of [citation impact indicators](citation_impact_indicators.md), [attention inequality](../mechanisms/attention_inequality.md), and evaluation.
- Gives a distribution-aware complement to [mean normalized citation score](mean_normalized_citation_score.md).
- Contrasts with [field-year mean high-citation flag](field_year_mean_high_citation_flag.md), which uses a mean threshold rather than a top-percentile threshold.
- Used as an outcome in [novelty penalty](../mechanisms/novelty_penalty.md), [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md), and team/career studies.

## Operationalization

- Construct a [reference set](../methods/reference_set_construction.md) by field, publication year, document type, and citation window.
- Rank papers by citation count within the reference set.
- Define percentile classes or binary top-percentile flags, such as top 1% or top 10%.
- Aggregate by counting top-percentile papers or dividing by publication volume to obtain a share.
- Document the tie-handling rule at percentile thresholds.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) distinguishes counts and proportions of highly cited publications, and describes normalized top-percentile indicators that use field-dependent thresholds.
- Waltman also describes percentile-class indicators, where papers are grouped by positions in the citation distribution rather than only by raw counts or averages.
- Waltman notes that exact top-percentile thresholds are hard when many publications have the same citation count at the threshold.
- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) uses top 1% highly cited status to show that highly novel papers can look weak under short citation windows but stronger under a 13-year window.
- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) supports percentile-style cross-field comparison by showing that field differences shrink after citation counts are rescaled by field-year averages.
- The same full text supports [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md), a direct test of whether top-ranked normalized papers represent fields more proportionally than raw-citation rankings.
- Verified full-text evidence from Li and Agha (2015) uses top 0.1%, 1%, and 5% citation-percentile classes as grant-level hit-publication outcomes for validating NIH peer-review scores.
- This grant-specific use is split into [grant hit-publication tail](grant_hit_publication_tail.md), which treats top-percentile papers as project-level output rather than only paper-level impact.
- Verified full-text evidence from Azoulay et al. (2009) uses vintage-specific citation quantiles to evaluate whether HHMI-style funding affects all publications, top quartile papers, top 5% papers, and top 1% papers differently.

## Caveats

- Percentile ranks depend on reference-set construction, tie handling, citation-window length, and database coverage.
- Top-percentile indicators hide variation within the tail and can be unstable for small portfolios.
- A top-percentile flag is an attention signal, not a direct quality or social-value measure.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [field-year mean high-citation flag](field_year_mean_high_citation_flag.md)
- [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md)
- [vintage-specific citation-tail output](vintage_specific_citation_tail_output.md)
- [grant hit-publication tail](grant_hit_publication_tail.md)
- [reference set construction](../methods/reference_set_construction.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [citation window selection](../methods/citation_window_selection.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [responsible metrics](responsible_metrics.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]
- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]
- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `citation_percentile_indicators`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Aliases: top percentile citations; highly cited paper share; top 1 percent papers; top 10 percent papers
