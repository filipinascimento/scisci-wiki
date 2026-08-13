# Commonness-based tail novelty

## Summary

Commonness-based tail novelty measures paper novelty by taking the low-tail commonness of cited-journal pairs and reversing it so rarer combinations score as more novel.

## Canonical Form

- Unit of analysis: paper, cited-journal pair, publication year, reference list, or field-year cohort.
- Typical representation: observed-over-expected journal-pair commonness, paper-level 10th-percentile commonness, log-transformed negative commonness score, or high-novelty indicator.
- Measurement target: rare recombination among the least-common reference-pair combinations in a paper.
- Empirical signature: a focal paper has a low 10th-percentile commonness value among its cited-journal pairs after year-specific expected-pair normalization.

## Uses in Science of Science

- Provides a concrete variant of [tail novelty](tail_novelty.md) for funding, team, and evaluation studies.
- Links [journal-pair z-score](journal_pair_z_score.md), [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md), and [new journal-pair novelty](new_journal_pair_novelty.md) by using pairwise reference combinations but summarizing them through commonness rather than first-time occurrence.
- Supports studies of [funding model status contingency](../mechanisms/funding_model_status_contingency.md) when novelty is the dependent variable.
- Helps separate novelty from productivity or citation impact in funding-system evaluations.

## Operationalization

- Retrieve references for all papers in a citation database and generate all within-paper cited-journal pairs.
- For each publication year, count the observed frequency of each journal pair and its expected frequency from each journal's marginal appearance in that year's pair universe.
- Compute commonness as observed pairs divided by expected pairs for each journal pair in that year.
- For each focal paper, collect the commonness values of its cited-journal pairs and record a low-tail statistic such as the 10th percentile.
- Log-transform the paper-level commonness value and multiply by minus one so lower commonness becomes higher novelty.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) adopts the Lee et al. (2015) novelty measure to study funding models and creativity.
- The paper constructs a yearly universe of cited-journal pairs from Web of Science, computes observed-versus-expected commonness for each pair, and summarizes sampled papers with the 10th percentile of their pair-commonness values.
- Wang et al. state that the 10th percentile is used instead of the minimum to reduce noise and improve reliability.
- Their regression results use this novelty score as the dependent variable when comparing competitive project funding with internal block funding and when testing status interactions.

## Caveats

- The measure is sensitive to journal normalization, database coverage, reference completeness, and year-specific marginal-frequency estimates.
- A rare journal pair can reflect indexing artifacts or bibliographic oddities rather than substantive intellectual novelty.
- The low-tail summary should be interpreted alongside conventionality, field, year, reference-count, and team-size controls.

## Links

- [tail novelty](tail_novelty.md)
- [journal-pair z-score](journal_pair_z_score.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [new journal-pair novelty](new_journal_pair_novelty.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [funding status-interaction test](../validations/funding_status_interaction_test.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]
- Lee, Y.-N., Walsh, J. P., & Wang, J. (2015). Creativity in scientific teams: Unpacking novelty and impact. *Research Policy*, 44(3), 684-697. https://doi.org/10.1016/j.respol.2014.10.007 [OpenAlex: W2021180328; Dimensions: pub.1049591501; WoS: unknown]

## Metadata

- Concept ID: `commonness_based_tail_novelty`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: journal-pair commonness novelty; 10th-percentile commonness; negative log commonness novelty; commonness tail novelty
