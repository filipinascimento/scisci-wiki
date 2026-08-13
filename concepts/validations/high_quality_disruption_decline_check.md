# High-quality disruption-decline check

## Summary

High-quality disruption-decline check tests whether declining disruption scores persist within elite venues, prize-winning papers, or other high-recognition subsets, limiting the interpretation that the trend is only a decline in publication quality.

## Canonical Form

- Unit of analysis: elite-journal paper, prize-winning paper, high-recognition subset, disruption score, or publication year.
- Typical representation: CD-index trend within high-status journals, Nobel-paper panel, quality-restricted robustness plot, or subset slope comparison.
- Validation target: distinguish lower measured disruption from a simple decline in the quality of published science.
- Empirical signature: a downward disruption trend remains visible after restricting to high-recognition or high-selectivity works.

## Uses in Science of Science

- Adds a quality-proxy robustness layer to [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Helps [responsible metrics](../measures/responsible_metrics.md) users avoid equating disruption with quality.
- Complements [high-disruption tail conservation](../mechanisms/high_disruption_tail_conservation.md) by separating elite-subset trends from right-tail count stability.
- Links disruption measurement to prize and elite-venue validation concerns in [disruption measure validation](disruption_measure_validation.md).

## Operationalization

- Define high-quality or high-recognition subsets before looking at the trend.
- Common subsets include elite multidisciplinary journals, Nobel-linked papers, expert-nominated breakthroughs, or top-field citation strata.
- Compute disruption scores using the same citation window as the main analysis.
- Compare subset trends with full-corpus trends while reporting sample sizes, source coverage, and selection criteria.
- Avoid treating the subset as a pure quality measure; it is a proxy for recognition or selectivity.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) argues that declining disruption is unlikely to be caused by diminishing science and technology quality alone.
- The paper restricts the analysis to papers in premier venues such as *Nature*, *Proceedings of the National Academy of Sciences*, and *Science*.
- Park et al. also examine Nobel-winning discoveries, reporting 635 Nobel papers in the figure caption.
- The downward CD5 trend persists in these high-recognition subsets, supporting the interpretation that disruption decline is not simply a low-quality-output artifact.

## Caveats

- Elite venues and Nobel prizes are recognition proxies, not unbiased quality labels.
- Prize and premier-journal subsets are field-skewed, selective, and historically changing.
- Persistence of a decline in high-recognition work does not prove a mechanism for the decline.
- High-quality consolidating work can be valuable even when its disruption score is low.

## Links

- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [disruption measure validation](disruption_measure_validation.md)
- [high-disruption tail conservation](../mechanisms/high_disruption_tail_conservation.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [journal impact factor assessment misuse](journal_impact_factor_assessment_misuse.md)
- [indicator false precision](indicator_false_precision.md)
- [Nobel-prize credit validation](nobel_prize_credit_validation.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `high_quality_disruption_decline_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: elite-subset disruption decline; Nobel disruption trend check; premier-journal disruption robustness; quality-restricted CD5 check
