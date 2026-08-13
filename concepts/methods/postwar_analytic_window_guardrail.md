# Postwar analytic-window guardrail

## Summary

Postwar analytic-window guardrail bounds long-run bibliometric analyses to periods where science organization, data completeness, and required follow-up windows make historical comparison defensible.

## Canonical Form

- Unit of analysis: publication year, patent grant year, analytic cohort, database coverage period, or follow-up window.
- Typical representation: start-year rule, end-year rule, cohort inclusion window, or historical comparability note.
- Method target: avoid comparing periods that differ too strongly in source completeness, social organization, or downstream-observation time.
- Empirical signature: early records are excluded despite being present in a database, and recent records are excluded when future citations are needed.

## Uses in Science of Science

- Provides cohort design guidance for [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md).
- Connects [citation-window selection](citation_window_selection.md) to historical-comparability constraints.
- Supports responsible use of [Web of Science](../datasets/web_of_science.md) and [PatentsView utility patent samples](../datasets/patentsview_utility_patent_sample.md).
- Generalizes to long-run studies of citations, disruption, collaboration, novelty, and patenting.

## Operationalization

- Document why the start year is defensible given database coverage and the social organization of the domain.
- Document why the end year leaves enough follow-up for citation or downstream-impact measures.
- Separate database-availability windows from analytic-comparability windows.
- Apply analogous logic to parallel science and technology datasets.
- Run sensitivity checks when changing the analytic window could alter the historical trend.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) limits paper analyses to 1945-2010 even though Web of Science begins in 1900, because the scale and social organization of science changed after the postwar era.
- The paper ends analyses in 2010 because several measures require subsequent years of data after publication.
- For patents, the authors start in 1976, the earliest year with machine-readable PatentsView records, and again end in 2010 for follow-up reasons.

## Caveats

- Guardrail windows improve comparability but can exclude historically important early periods.
- Window choices should not be optimized to strengthen a preferred trend.
- Different measures may require different follow-up lengths.

## Links

- [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md)
- [citation-window selection](citation_window_selection.md)
- [Web of Science](../datasets/web_of_science.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395; WoS: unknown]

## Metadata

- Concept ID: `postwar_analytic_window_guardrail`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: postwar comparability window; historical analytic-window guardrail; follow-up bounded cohort window; long-run bibliometric window rule
