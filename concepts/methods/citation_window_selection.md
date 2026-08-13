# Citation window selection

## Summary

Citation window selection chooses the time interval over which citations are counted, balancing timely evaluation against the risk of missing delayed impact.

## Canonical Form

- Unit of analysis: paper, portfolio, journal, field, funding program, evaluation exercise, or prediction task.
- Typical representation: fixed citation window, rolling window, early-versus-long comparison, citation delay score, or sensitivity table.
- Method target: define when citation impact is measured.
- Empirical signature: indicator values or rankings change when short windows are replaced by longer windows.

## Uses in Science of Science

- Required for [citation impact indicators](../measures/citation_impact_indicators.md), [field normalized citation impact](../measures/field_normalized_citation_impact.md), and [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Explains part of the [novelty penalty](../mechanisms/novelty_penalty.md), [novelty short-window undercount](../validations/novelty_short_window_undercount.md), and [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md).
- Connects evaluation design to [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) and [citation trajectory models](citation_trajectory_models.md).
- Can be operationalized as a [dynamic big-hit window model](dynamic_big_hit_window_model.md) when top-percentile status is recomputed over each cumulative citation window.
- Explains part of [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md), because Eigenfactor-family journal indicators use a longer window than the classic two-year impact factor.
- Must account for [sleeping-beauty short-window bias](../validations/sleeping_beauty_short_window_bias.md) when delayed recognition is plausible.
- Connects to [Garfield Constant](../measures/garfield_constant.md) when the citation-window question is framed as citations per cited item rather than total citations per paper.

## Operationalization

- Define the publication cohort and the exact start and end dates for counting citations.
- Report whether the window is fixed by publication year, evaluation date, or database snapshot.
- Run sensitivity checks over short and long windows when novelty, interdisciplinarity, field age, or delayed recognition is plausible.
- Align comparison groups so papers have consistent citation exposure.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) frames citation-window choice as a tradeoff: longer windows improve accuracy, while shorter windows improve timeliness.
- Waltman also links citation-window decisions to delayed recognition and field-specific citation tempos, warning that short windows can bias indicator interpretation.
- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) shows a concrete failure mode: highly novel papers are less likely to appear top cited in early years but have higher top-hit probability over a 13-year window.
- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) shows a parallel interdisciplinarity case, where variety and disparity can be negatively associated with short-term citations but positively associated with long-term citations.
- Wang et al. make this a concrete [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md) and measure delayed accumulation with a [citation speed-delay measure](../measures/citation_speed_delay_measure.md).
- Verified full-text evidence from Redner (1998) adds a tail-specific warning: high-citation tails can keep maturing long after publication, so short windows can understate the eventual extreme tail.
- The same evidence is split into [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md), which compares older and newer cohorts before treating a high-citation tail as mature.
- Verified full-text evidence from Ke et al. (2015) shows that many sleeping beauties become highly influential more than 50 years after publication, far beyond typical citation-impact windows.
- Verified full-text evidence from West et al. (2010) gives a journal-metric example: Article Influence and impact factor rankings can diverge partly because Article Influence uses a five-year citation window while impact factor historically used two years.
- That journal-specific case is split out as [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md), including Materials Science versus Horticulture citation-lag evidence.

## Caveats

- Longer windows improve stability but reduce usefulness for recent evaluation and can favor older cohorts.
- Short windows can penalize slow-diffusing, interdisciplinary, or novel work.
- Citation windows interact with database update timing and citation-count extraction dates.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [sleeping-beauty short-window bias](../validations/sleeping_beauty_short_window_bias.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [awakening intensity](../measures/awakening_intensity.md)
- [citation trajectory models](citation_trajectory_models.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [Garfield Constant](../measures/garfield_constant.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)
- [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md)
- [dynamic big-hit window model](dynamic_big_hit_window_model.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [citation speed-delay measure](../measures/citation_speed_delay_measure.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]
- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `citation_window_selection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Aliases: citation window; citation time window; impact window; citation exposure period
