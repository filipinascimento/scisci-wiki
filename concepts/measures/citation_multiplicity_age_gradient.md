# Citation multiplicity-age gradient

## Summary

Citation multiplicity-age gradient measures how the average number of citations per cited paper changes with the cited paper's age, separating mere citation incidence from repeated citation concentration.

## Canonical Form

- Unit of analysis: cited paper, publication-age bin, citation year, field, or citation-index snapshot.
- Typical representation: citations per cited paper as a function of cited-paper age.
- Measurement target: whether recent cited papers receive more repeated citation links than older cited papers.
- Empirical signature: younger cited papers have higher citation multiplicity than older cited papers after conditioning on being cited.

## Uses in Science of Science

- Complements [research-front citation share](research_front_citation_share.md) by measuring repeated attention among cited papers, not just the age share of references.
- Provides a diagnostic for [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md) and [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Links [annual citation-incidence distribution](annual_citation_incidence_distribution.md) to citation-age distributions.
- Helps compare whether fields cite recent fronts broadly or repeatedly cite a small recent core.

## Operationalization

- For a fixed citing year, group cited papers by publication age or publication year.
- Count total citations to each age group and the number of distinct cited papers in that age group.
- Divide citations by distinct cited papers to obtain multiplicity.
- Plot or model multiplicity against cited-paper age, with field and document-type stratification where possible.
- Compare multiplicity gradients with citation-incidence and reference-age curves.

## Evidence and Validations

- Verified full-text evidence from Price (1965) uses Garfield's 1961 Science Citation Index data to plot the ratio of citations to individual cited papers by publication year.
- Price interprets the ratio as a measure of citation multiplicity and argues that it falls sharply with cited-paper age.
- The paper reasons that recent cited papers constitute a larger fraction of the available recent population than old cited papers do of the older archive.
- Price uses this pattern as evidence that much-cited papers are disproportionately recent and connected to active research fronts.

## Caveats

- Multiplicity depends on the cited-paper universe and on how references are indexed and deduplicated.
- Review articles, methods papers, and hot controversies can dominate recent multiplicity.
- The measure conditions on being cited, so it should be interpreted alongside uncited-paper mass and overall citation incidence.

## Links

- [research-front citation share](research_front_citation_share.md)
- [annual citation-incidence distribution](annual_citation_incidence_distribution.md)
- [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [reference-age search depth](reference_age_search_depth.md)
- [citation life-cycle half-life](citation_life_cycle_half_life.md)
- [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `citation_multiplicity_age_gradient`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: citations per cited paper by age; citation multiplicity curve; cited-paper age multiplicity; recent-paper multiplicity gradient
