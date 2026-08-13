# CD-index time windows

## Summary

CD-index time windows define when downstream citations are counted for disruption and consolidation scores, such as CD5 for a five-year post-publication or post-issue window.

## Canonical Form

- Unit of analysis: focal paper, focal patent, citation window, field-year cohort, or time-varying citation ego network.
- Typical representation: CDt score indexed by elapsed time `t`, often reported as CD5 for comparability.
- Measurement target: disruption or consolidation measured at a fixed downstream exposure time.
- Empirical signature: a focal work's score changes as later papers or patents enter the citation neighborhood.

## Uses in Science of Science

- Standardizes [disruption index](disruption_index.md) comparisons across cohorts with different time at risk.
- Separates time-window choice from the underlying [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md).
- Supports sensitivity checks for [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) and [disruption measure validation](../validations/disruption_measure_validation.md).

## Operationalization

- Select a citation window after the focal publication or patent issue date.
- Build the focal-predecessor-future citation triad using only future works observed within that window.
- Compute CDt for the chosen window and report the window explicitly.
- Recompute under alternative windows to check sensitivity to citation aging and delayed recognition.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) defines CDt as a dynamic index because future citation neighborhoods grow as focal patents and predecessors accrue citations.
- Funk and Owen-Smith denote five-year measures as `CD5` and `mCD5`, using the first five years after patent issue because annual patent citations often peak in that time frame.
- Verified full-text evidence from Park, Leahey, and Funk (2023) measures the CD index five years after each paper's publication or patent's issue year and labels this score `CD5`.
- Park et al. report that their decline result is robust to analyses using alternative CD-index windows.

## Caveats

- Short windows can miss delayed disruptive influence, especially in slow-moving fields.
- Long windows can mix the focal work's direct effect with later reputation, review, or field-growth effects.
- Cross-field comparisons require field/year normalization or explicit sensitivity checks.

## Links

- [disruption index](disruption_index.md)
- [modified CD index](modified_cd_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [high-disruption tail conservation](../mechanisms/high_disruption_tail_conservation.md)
- [citation window selection](../methods/citation_window_selection.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `cd_index_time_windows`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: CD5; CDt window; disruption citation window; five-year disruption score
