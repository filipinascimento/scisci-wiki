# Author rank-citation profile

## Summary

Author rank-citation profile orders a scientist's publications by citation count to represent how concentrated the scientist's portfolio impact is across papers.

## Canonical Form

- Unit of analysis: scientist, publication portfolio, career stage, rank-ordered paper, or discipline cohort.
- Typical representation: descending citation-rank curve c_i(r), Zipf-like rank plot, DGBD fit, or top-paper citation share.
- Measurement target: within-author citation inequality and portfolio shape.
- Empirical signature: a small number of papers can account for a large share of an author's cumulative citations.

## Uses in Science of Science

- Extends [citation distribution scaling](citation_distribution_scaling.md) from paper cohorts to individual publication portfolios.
- Gives a portfolio benchmark for [reputation Monte Carlo career models](../methods/reputation_monte_carlo_career_model.md).
- Links [cumulative author reputation](cumulative_author_reputation.md) to the concentration of citations in one or a few papers.
- Helps interpret [h-index](h_index.md) by showing the full ranked portfolio rather than only the h-core boundary.

## Operationalization

- For each author, disambiguate the publication portfolio and compute cumulative citations for each paper at a fixed observation date or career time.
- Sort papers in descending citation count to obtain c_i(1), c_i(2), ..., c_i(N_i).
- Fit or compare rank-profile forms such as discrete generalized beta distributions where appropriate.
- Report top-paper shares such as c_i(1) divided by C_i and the citation window used.
- Compare rank profiles across fields only after addressing field citation-density and career-age differences.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) defines the rank-citation profile as the Zipf distribution of a scientist's publications ranked in decreasing citation order.
- The paper reports that individual author profiles belong to the class of discrete generalized beta distributions and uses fit parameters as Monte Carlo career-model benchmarks.
- Petersen et al. use rank-citation profiles alongside citation life cycles and cumulative career growth to evaluate simulated careers.
- The paper highlights concentration by reporting that the highest-cited paper can represent a substantial fraction of a scientist's total citations.

## Caveats

- Rank profiles are sensitive to author disambiguation, citation window, field, and inclusion of coauthored papers.
- A top-heavy profile may reflect a breakthrough, team credit, a methods paper, or field citation density rather than stable author quality.
- Comparing profiles across career ages requires care because younger portfolios have fewer mature papers.

## Links

- [citation distribution scaling](citation_distribution_scaling.md)
- [h-index](h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [cumulative author reputation](cumulative_author_reputation.md)
- [career growth exponents](career_growth_exponents.md)
- [citation crossover threshold](citation_crossover_threshold.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)
- [reputation Monte Carlo career model](../methods/reputation_monte_carlo_career_model.md)
- [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md)
- [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `author_rank_citation_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: portfolio rank-citation profile; author Zipf profile; scientist citation-rank curve; ranked publication portfolio
