# Almost-closed field reference leakage

## Summary

Almost-closed field reference leakage is the validation caveat that even a tightly bounded field sends some references outside its boundary, so citation-network closure should be measured rather than assumed.

## Canonical Form

- Unit of analysis: field, specialty, citation matrix, reference list, boundary definition, or outside-field citation.
- Typical representation: inside-field versus outside-field reference share.
- Validation target: test whether a field boundary is close enough to closed for citation accounting or matrix interpretation.
- Empirical signature: a nonzero share of references crosses the proposed field boundary even in a deliberately tight case.

## Uses in Science of Science

- Adds a boundary validation layer to [reference-citation balance](../representations/reference_citation_balance.md).
- Helps interpret [tight-field citation matrix](../representations/tight_field_citation_matrix.md) as nearly closed rather than perfectly closed.
- Connects off-boundary references to [citation-matrix background noise](citation_matrix_background_noise.md).
- Gives field delineation studies a simple leakage diagnostic before using within-field citation measures.

## Operationalization

- Define a candidate field or specialty corpus.
- Count references from corpus papers to inside-corpus and outside-corpus targets.
- Report leakage share by year, subfield, document type, and cited age.
- Test whether conclusions change when outside-field references are included, excluded, or modeled separately.
- Use expert review or alternative field boundaries to determine whether leakage is noise, interdisciplinarity, or boundary error.

## Evidence and Validations

- Verified full-text evidence from Price (1965) treats an example specialty as almost closed while still allowing a measurable share of references to point outside the field.
- The point is methodological: tight-field citation accounting needs an explicit boundary-leakage term.
- The motif is distinct from reference-citation balance because it focuses on boundary closure rather than aggregate reference and citation counts.
- It is also distinct from background noise because leakage can be substantive cross-field dependence, not just sparse matrix error.

## Caveats

- Leakage can be a sign of interdisciplinarity or method import, not a defect.
- Outside-field references may be undercounted when identifiers or source coverage are incomplete.
- Field closure can change over time as specialties form, merge, or become more interdisciplinary.

## Links

- [reference-citation balance](../representations/reference_citation_balance.md)
- [tight-field citation matrix](../representations/tight_field_citation_matrix.md)
- [citation-matrix background noise](citation_matrix_background_noise.md)
- [citation networks](../representations/citation_networks.md)
- [research fronts](../mechanisms/research_fronts.md)
- [pure citation-network disconnected residual](pure_citation_network_disconnected_residual.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; SciSciNet: W2088209891; WoS: unknown]

## Metadata

- Concept ID: `almost_closed_field_reference_leakage`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: field-boundary reference leakage; near-closed citation field leakage; outside-field reference share; citation boundary leakage
