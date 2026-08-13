# Same-early-citation divergence

## Summary

Same-early-citation divergence is the validation pattern that papers with the same short-window citation count can accumulate very different long-term citations, making early raw citations an unstable proxy for durable impact.

## Canonical Form

- Unit of analysis: paper, early citation window, long citation horizon, journal cohort, or matched early-count set.
- Typical representation: matched early-citation trajectories, diverging citation distributions, increasing dispersion curve, or early-window prediction failure.
- Validation target: audit whether fixed-window citation counts predict long-run impact for individual papers.
- Empirical signature: papers matched on early citations spread out over time, with increasing dispersion in later citation counts.

## Uses in Science of Science

- Provides a direct caveat for [citation impact indicators](../measures/citation_impact_indicators.md), [citation window selection](../methods/citation_window_selection.md), and short-window evaluation.
- Complements [equal-fitness citation convergence](equal_fitness_citation_convergence.md), which shows that fitted fitness can align long-term trajectories better than raw early counts.
- Supports [long-term citation prediction](../methods/long_term_citation_prediction.md) and [citation prediction envelope coverage](citation_prediction_envelope_coverage.md) by motivating model-based uncertainty rather than point estimates.
- Helps explain why delayed or paradigm-changing work can be missed by early citation screens.

## Operationalization

- Choose an early citation window, such as two or five years after publication.
- Match papers with identical or very similar early citation counts.
- Track later cumulative citations over long horizons and compute dispersion growth.
- Compare divergence with papers matched by fitted fitness, field, journal, document type, and publication year.
- Report whether high-impact tail papers are underdetected by the early-window rule.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) states that papers with the same five-year citation count can have widely different long-term impacts.
- The paper matches papers with the same two-year citation count and shows that their later citation counts diverge rather than converge.
- Wang et al. report that dispersion increases over time in the same-early-citation group, in contrast with the decreasing dispersion among papers matched on fitted fitness.
- The paper also notes that exceptional long-term impact is especially hard to recognize from early citation patterns.

## Caveats

- Early citations can still be informative for many ordinary papers; the caveat is strongest for long-run rankings and high-impact tails.
- Divergence depends on the chosen early window, citation database, field tempo, and document type.
- Matching on early counts without field and cohort controls can mix very different citation environments.
- Short-window signals may reflect visibility, venue, or topic fashion rather than durable use.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation window selection](../methods/citation_window_selection.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation prediction envelope coverage](citation_prediction_envelope_coverage.md)
- [equal-fitness citation convergence](equal_fitness_citation_convergence.md)
- [paper fitness](../measures/paper_fitness.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [interdisciplinarity citation-window reversal](interdisciplinarity_citation_window_reversal.md)
- [sleeping-beauty short-window bias](sleeping_beauty_short_window_bias.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `same_early_citation_divergence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: early-citation divergence; same short-window citation divergence; fixed-window citation failure; early impact prediction caveat
