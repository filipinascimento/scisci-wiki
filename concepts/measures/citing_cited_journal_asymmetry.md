# Citing-cited journal asymmetry

## Summary

Citing-cited journal asymmetry measures the imbalance between how many journal titles a source cites and how many journal titles cite it, exposing differences between a journal's input breadth and output reach.

## Canonical Form

- Unit of analysis: journal, source journal, cited journal, field, specialty, or journal citation network.
- Typical representation: outward cited-title count versus incoming citing-title count, input-output breadth ratio, or citation-network asymmetry table.
- Measurement target: whether a journal draws on a broader or narrower literature than the audience that cites it.
- Empirical signature: a journal cites many distinct journals but is cited by few, or conversely receives attention from many journals while citing a concentrated set.

## Uses in Science of Science

- Combines [source journal reference profile](../representations/source_journal_reference_profile.md) with [cited journal citation profile](../representations/cited_journal_citation_profile.md).
- Adds a directional network measure to [journal citation network mapping](../representations/journal_citation_network_mapping.md).
- Helps study field import-export roles, methodological service journals, specialty isolation, and multidisciplinary reach.
- Complements [multidisciplinary reference spread](multidisciplinary_reference_spread.md) by comparing outward breadth with incoming breadth.

## Operationalization

- Build a journal-by-journal citation matrix after title normalization.
- For each journal, count distinct cited journals and distinct citing journals above a documented threshold.
- Compute a difference, ratio, or normalized asymmetry index.
- Compare asymmetry within fields or specialties before making cross-field claims.
- Inspect whether asymmetry is driven by source coverage, review journals, language coverage, or small sample windows.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) asks about the significance of a wide disparity between the number of journals cited by a given journal and the number that cite it.
- Garfield gives *Ecology* as an example, noting that it cites about 500 journals but is cited by only 115.
- The paper frames this asymmetry as potentially informative about a field and a journal, beyond the obvious input-output imbalance.
- The question appears in a section proposing future uses of the SCI data base for modeling journal communication networks and functional definitions of disciplines and specialties.

## Caveats

- Asymmetry depends on source coverage, cited-title normalization, thresholding, and field size.
- A journal can cite broadly because of review practices without being broadly interdisciplinary.
- Incoming citing breadth can be delayed relative to outgoing reference breadth.
- Comparisons should account for journal article volume and reference-list length.

## Links

- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [cited journal citation profile](../representations/cited_journal_citation_profile.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [journal citation frequency](journal_citation_frequency.md)
- [multidisciplinary reference spread](multidisciplinary_reference_spread.md)
- [cited journal title normalization](../methods/cited_journal_title_normalization.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `citing_cited_journal_asymmetry`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: journal input-output citation asymmetry; citing-cited breadth ratio; journal citation direction asymmetry; incoming outgoing journal breadth
