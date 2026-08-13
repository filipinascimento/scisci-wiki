# Expanding citation-window sweep

## Summary

An expanding citation-window sweep recomputes citation outcomes over nested windows to test whether an effect is concentrated in recent references or persists across longer historical spans.

## Canonical Form

- Unit of analysis: citation window, journal-year, field-year, subfield-year, paper set, or modeled citation outcome.
- Typical representation: coefficient or percentage-change curve across 1-year through multi-decade citation windows with confidence intervals.
- Method target: separate short-horizon citation behavior from longer-horizon historical-use patterns.
- Empirical signature: effects may strengthen, weaken, reverse, or remain stable as the reference window expands.

## Uses in Science of Science

- Turns [citation window selection](citation_window_selection.md) into an explicit robustness surface rather than a single design choice.
- Validates [online availability panel identification](../validations/online_availability_panel_identification.md) by checking whether online-access effects are only about very recent references.
- Helps interpret [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md), [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md), and [reference-age search depth](../measures/reference_age_search_depth.md).
- Generalizes to studies of novelty, interdisciplinarity, disruption, delayed recognition, and evaluation metrics where citation timing changes conclusions.

## Operationalization

- Define a maximum citation or reference window and a common sample that is observable across all windows.
- Recompute the same outcome for nested windows, such as references to the past 1, 2, ..., 30 years.
- Re-estimate the same model specification at each window length.
- Plot effect estimates and uncertainty intervals by window length.
- Interpret whether effects are driven by recent references, long-run classics, or a consistent pattern across the historical span.
- Report how the common-sample restriction changes the population relative to the main specification.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) repeats the citation-breadth and citation-concentration analyses using expanding windows from the last year through the last 30 years.
- Evans fixes the sample from 1975 to 2005 so all models can support a 30-year lookback to the citation-index start in 1945.
- The paper estimates percentage changes associated with a one-year extension of online availability across each window length.
- Evans finds that online availability is associated with fewer distinct cited articles and journals across windows, with the decline strongest for recent references.
- The concentration-window pattern is less consistent, but article concentration within subfields is highest when the window is restricted to the last year's articles.

## Caveats

- Expanding windows change both citation age and the set of eligible historical sources, so interpretation needs a clear denominator.
- A common sample can improve comparability while excluding earlier years, fields, or sources that matter substantively.
- Window sweeps diagnose sensitivity but do not by themselves identify why effects vary by horizon.

## Links

- [citation window selection](citation_window_selection.md)
- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md)
- [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `expanding_citation_window_sweep`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: expanding citation windows; nested citation-window robustness; reference-window sweep; citation horizon sensitivity
