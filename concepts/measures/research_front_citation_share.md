# Research-front citation share

## Summary

Research-front citation share measures the share of references or citations that connect new work to recent, tightly linked papers rather than to the diffuse archival literature.

## Canonical Form

- Unit of analysis: citing paper, field-year, cited-paper age band, research front, or citation index.
- Typical representation: share of references to recent-front papers, age-deviation curve, or front versus background citation partition.
- Measurement target: how strongly a field's current papers are tied to recent active work.
- Empirical signature: recent papers receive more citations than expected from literature growth alone.

## Uses in Science of Science

- Operationalizes [research fronts](../mechanisms/research_fronts.md) as a measurable citation-age and linkage partition.
- Complements modern [citation immediacy parameter](citation_immediacy_parameter.md) pages by measuring field-level recent-front concentration rather than a fitted paper-level time-to-peak parameter.
- Summarizes the mass under a [citation immediacy effect curve](citation_immediacy_effect_curve.md) after applying a [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md).
- Links [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) to active front dynamics.
- Helps compare fields where recent work is central with fields where older taxonomic or archival literature remains important.

## Operationalization

- Estimate the expected age distribution of citations under literature growth and database coverage.
- Fit or document the [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md) before assigning excess recent citations to the research front.
- Measure the excess citation rate to recent papers above that baseline.
- Define the recent-front window and compute the share of references or citations assigned to it.
- Compare the front share across fields, years, document types, and database snapshots.
- Pair age-based front shares with [tight-field citation matrices](../representations/tight_field_citation_matrix.md) or co-citation clusters when possible.
- Check for historical publication shocks before treating deviations from a growth curve as ordinary immediacy.

## Evidence and Validations

- Verified full-text evidence from Price (1965) identifies an "immediacy" effect: recent papers are cited much more often than older papers after accounting for literature growth.
- Price estimates that a large background share of citations follows the growth curve, while a smaller but important share accounts for the recent-paper hump.
- The paper interprets that recent-paper excess as evidence that part of the reference list is tied to the active research front.
- Price further suggests that a substantial share of references can be understood as tight links to recent papers, while the remainder draws on the broader archive.
- Price's cited-year curve also motivates a separate [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md) for periods such as wartime publication dips.

## Caveats

- A high recent-front share can reflect fashion, database truncation, rapid method turnover, or incomplete older-reference coverage.
- The front window is field-dependent and should not be fixed without sensitivity checks.
- Recent-front citation share does not identify whether the cited recent work is conceptually foundational or merely visible.

## Links

- [research fronts](../mechanisms/research_fronts.md)
- [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md)
- [citation immediacy effect curve](citation_immediacy_effect_curve.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [annual citation-incidence distribution](annual_citation_incidence_distribution.md)
- [citation multiplicity-age gradient](citation_multiplicity_age_gradient.md)
- [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md)
- [tight-field citation matrix](../representations/tight_field_citation_matrix.md)
- [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md)
- [citation immediacy parameter](citation_immediacy_parameter.md)
- [reference-age search depth](reference_age_search_depth.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `research_front_citation_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: immediacy factor; recent-front citation share; research-front reference share; citation-age front share
