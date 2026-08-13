# Citation speed-delay measure

## Summary

The citation speed-delay measure summarizes how quickly a paper accumulates its eventual citations within a fixed observation window, with delay defined as the complement of speed.

## Canonical Form

- Unit of analysis: paper, annual cumulative citation trajectory, citation window, or evaluation cohort.
- Typical representation: scalar citation speed in [0, 1] and citation delay as 1 minus speed.
- Measurement target: whether citations arrive early or late within an observation window.
- Empirical signature: delayed papers have low early cumulative citation ratios and higher citation-delay scores.

## Uses in Science of Science

- Operationalizes the temporal side of [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md).
- Provides a trajectory-based supplement to short-window and long-window [citation impact indicators](citation_impact_indicators.md).
- Helps validate whether [citation window selection](../methods/citation_window_selection.md) misses slow-diffusing work.
- Can be reused for delayed recognition, novelty penalties, and long-term impact studies.

## Operationalization

- For a fixed n-year observation window, compute cumulative citations C_i by each year i and total citations C_n by the end of the window.
- Compute citation speed as `(1 / (n - 1)) * sum_{i=1}^{n-1} (C_i / C_n)`.
- Define citation delay as `1 - citation speed`.
- Exclude or separately audit papers with very small final citation counts because the ratio can be unstable when C_n is small.
- Report the observation window and citation census date.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) adopts the citation speed measure from Wang, Song, and Barabasi (2013) and defines citation delay as one minus speed.
- Wang et al. set n to 13 years for their 2001 Web of Science article cohort.
- They exclude papers with fewer than 12 citations in the citation-delay regressions because the denominator is too small, while reporting robust results when relaxing that restriction.
- The measure supports their finding that higher variety and disparity are associated with delayed citation accumulation.

## Caveats

- Citation delay cannot be interpreted without the fixed observation window.
- The ratio is noisy for low-cited papers and can be sensitive to database updates.
- A high delay score can represent late recognition, slow field diffusion, or delayed indexing rather than scientific value.

## Links

- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [citation impact indicators](citation_impact_indicators.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation immediacy parameter](citation_immediacy_parameter.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [sleeping-beauty short-window bias](../validations/sleeping_beauty_short_window_bias.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `citation_speed_delay_measure`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: citation speed; citation delay score; cumulative citation speed; delayed citation accumulation score
