# Citation topography strips

## Summary

Citation topography strips represent current science as many small, objectively defined research-front strips whose positions and centralities can locate journals, countries, authors, and papers.

## Canonical Form

- Unit of analysis: research-front strip, journal, country, author, paper, citation edge, or science map position.
- Typical representation: citation-derived topography of small active fronts with central and background regions.
- Representation target: map the current literature by active citation strips rather than only by stable taxonomies or journal categories.
- Empirical signature: the global research front decomposes into small linked strips rather than one continuous frontier.

## Uses in Science of Science

- Extends [research fronts](../mechanisms/research_fronts.md) into a map-like representation.
- Provides a historical precursor to [science maps](science_maps.md), [journal citation network mapping](journal_citation_network_mapping.md), and [science map overlays](science_map_overlays.md).
- Connects citation structure to [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md), journal centrality, and strategic position.
- Helps separate strategically central sources from distant background journals in citation-index corpora.

## Operationalization

- Build a citation network or journal-citation network from a current literature snapshot.
- Detect tightly linked research-front strips using citation, co-citation, bibliographic-coupling, or journal citation relations.
- Place journals, authors, countries, and papers by their participation in strips and by centrality within each strip.
- Treat low-connectivity sources as background rather than forcing them into central front maps.
- Use [citation-matrix background noise](../validations/citation_matrix_background_noise.md) as a local check before interpreting every off-strip edge as a meaningful topographic bridge.
- Update strips over time because their labels and boundaries can change materially from year to year.

## Evidence and Validations

- Verified full-text evidence from Price (1965) argues that the total research front is not one continuous knitted row, but a set of small segments and strips.
- Price suggests that many strips correspond to the work of at most a few hundred researchers at a time.
- The paper proposes that working out the strips could delineate the topography of current scientific literature.
- Price further suggests that journals, countries, authors, and individual papers could be located by their place and strategic centralness within a strip.
- The paper also warns that many nominally current journals may be distant background noise rather than central to any active strip.
- A later Price split makes the background-noise layer explicit as a validation caveat for strip and matrix interpretations.

## Caveats

- Citation-derived strips can miss new uncited work, cross-disciplinary text similarity, data/software reuse, and informal communities.
- Strategic centrality can be mistaken for value or quality if used evaluatively without context.
- Strip detection depends on time window, source coverage, edge weighting, and clustering resolution.

## Links

- [research fronts](../mechanisms/research_fronts.md)
- [citation networks](citation_networks.md)
- [citation-matrix background noise](../validations/citation_matrix_background_noise.md)
- [science maps](science_maps.md)
- [journal citation network mapping](journal_citation_network_mapping.md)
- [science map overlays](science_map_overlays.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [tight-field citation matrix](tight_field_citation_matrix.md)
- [citation-index alerting service](../methods/citation_index_alerting_service.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `citation_topography_strips`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: research-front strips; citation topography; strategic centralness map; knitted strips of science
