# Science-technology lag

## Summary

Science-technology lag measures the elapsed time between scientific work and linked technological invention, usually along direct or shortest paper-patent citation paths.

## Canonical Form

- Unit of analysis: paper, patent, patent-paper path, field, technology class, institution, inventor, or author.
- Typical representation: time difference attached to an integrated patent-paper citation path.
- Mechanism or measurement target: translation delay, maturation time, and time-to-application.
- Empirical signature: patent application year minus paper publication year, computed for a direct link or a shortest path.

## Uses in Science of Science

- Complements [science-technology distance](science_technology_distance.md) by distinguishing graph proximity from elapsed time.
- Helps compare fields where science is linked to technology quickly versus fields where applied use arrives after long delays.
- Converts [patent-paper links](../datasets/patent_paper_links.md) into a temporal measure of translation.
- Can be paired with impact, funding, institutional, and field measures to study delayed technological uptake.

## Operationalization

- Resolve [patent application-year time anchors](../methods/patent_application_year_time_anchor.md) and paper publication years for direct or indirect patent-paper paths.
- For direct links, subtract the cited paper publication year from the citing patent application year.
- For indirect links, compute the total elapsed time along the shortest citation path between paper and patent.
- Summarize mean, median, distribution, and field-normalized lag by scientific field, technology class, institution, or inventor.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) defines a temporal counterpart to citation distance by calculating the time period along the shortest citation path between papers and patents.
- In their direct boundary case, the mean delay is 6.66 years between paper publication and patent application.
- By distance 6, mean delay grows to 19.62 years for papers and 22.70 years for patents, showing that graph distance and temporal distance are related but not identical.
- The paper reports substantial variation across fields, so lag is useful for comparing translation regimes rather than imposing a single universal application window.

## Caveats

- Patent issue dates can overstate translation lag; application dates are usually preferable.
- Lags depend on citation extraction, path definition, and field-specific publication and patenting rhythms.
- Short lag does not prove direct use, and long lag may reflect indirect or cumulative pathways rather than slow translation.

## Links

- [science-technology distance](science_technology_distance.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [citation window selection](../methods/citation_window_selection.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `science_technology_lag`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: temporal distance to technology; patent application lag; science-to-technology delay; translation lag
