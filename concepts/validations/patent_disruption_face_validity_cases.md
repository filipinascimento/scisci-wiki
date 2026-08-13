# Patent disruption face-validity cases

## Summary

Patent disruption face-validity cases compare disruption scores with historically recognizable consolidating and destabilizing inventions.

## Canonical Form

- Unit of analysis: focal patent, known technological case, CD-index score, mCD-index score, citation ego network, or qualitative history.
- Typical representation: table or network diagram of benchmark patents with scores, predecessor citations, future citations, and historical interpretation.
- Validation target: check whether disruption metrics classify well-understood inventions in plausible directions.
- Empirical signature: canonical breakthrough patents score destabilizing, while patents that extend a proprietary technology stream score consolidating.

## Uses in Science of Science

- Provides a case-based validation layer for [disruption index](../measures/disruption_index.md) and [modified CD index](../measures/modified_cd_index.md).
- Complements statistical [disruption measure validation](disruption_measure_validation.md) with interpretable examples.
- Helps teach the difference between citation impact, destabilization, and consolidation.
- Links patent-based disruption analysis to historical evidence about biotechnology, search, nanotechnology, and agricultural biotechnology.

## Operationalization

- Select patents with well-documented historical interpretations.
- Compute `CDt`, `mCDt`, forward citations, and predecessor counts at comparable windows.
- Inspect the focal-predecessor-future citation graph and the time path of `CDt`.
- Compare metric direction with historical accounts of whether the invention displaced or reinforced predecessor streams.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) presents illustrative patents with `CD5`, `mCD5`, all-through-2010 scores, impact, predecessor counts, application years, and assignees.
- The paper identifies patents for recombinant DNA, eukaryotic cotransformation, polymerase chain reaction, and scanning tunneling microscopy as strongly destabilizing examples.
- It treats Monsanto's glyphosate-resistant soybean variety as a consolidating example because future patents cite it together with its predecessor technologies.
- Funk and Owen-Smith use PageRank and the Axel cotransformation patent as network-diagram examples showing how `CDt` changes over time.

## Caveats

- Face-validity cases validate intuition at extremes better than they validate mid-range scores.
- Famous examples are historically selective and can overrepresent highly visible technological trajectories.
- Case interpretation depends on patent-family boundaries and whether the focal patent cites the predecessors it later displaces.

## Links

- [disruption index](../measures/disruption_index.md)
- [modified CD index](../measures/modified_cd_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [disruption measure validation](disruption_measure_validation.md)
- [CD-index undefined cases](cd_index_undefined_cases.md)
- [patent importance measure divergence](patent_importance_measure_divergence.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown; SciSciNet: W2303284028]

## Metadata

- Concept ID: `patent_disruption_face_validity_cases`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: CD-index case validation; patent disruption case studies; disruptive patent examples; consolidation face validity
